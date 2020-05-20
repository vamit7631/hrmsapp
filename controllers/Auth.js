const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const constants = require("../constants/constants");
const config = require("../config/config");
const request = require("request");
const User = require("../models/user");
const UserDevice = require("../models/user_access");

const isValidToken = async function (token) {
    try {
        if (token) {
            token = token.replace("JWT ", "").replace("Bearer ", "");
            return {
                valid: true,
                data: await jwt.verify(token, config.jwt.jwtSecret),
                token: token,
            };
        }
        return {
            valid: false,
            message: "Unauthorized",
        };
    } catch (error) {
        return {
            valid: false,
            message: "Invalid Token",
        };
    }
};

module.exports.isValidToken = isValidToken;

module.exports.VerifyToken = async function (req, res, next) {
    // //  get the token from the request
    try {
        let token = await isValidToken(req.headers["authorization"]);
        if (!token.valid) {
            return res.status(401).json({
                status: false,
                message: token.message,
                data: "",
            });
        }
        let query = {};
        if (token.data.user_id) {
            query.user_id = token.data.user_id = token.data.user_id;
        } else {
            query._id = token.data.id;
        }
        let user = await User.findOne(query);
        if (!user) {
            return res.status(401).json({
                status: false,
                message: "User Not Found",
                data: "",
            });
        }
        if (token.data.request_device_identifier) {
            let userDeviceInfo = await UserDevice.findOne({
                user_id: user._id,
                identifier: token.data.request_device_identifier,
                deleted_at: null,
            });
            if (!userDeviceInfo) {
                return res.status(401).json({
                    status: false,
                    message: "Session Expired",
                    data: "",
                });
            }
        }

        req.user = {
            id: user.id,
            mobile: user.mobile,
            roles: user.roles,
            user_id: user.user_id,
            token: token.token,
            request_device_identifier: token.data.request_device_identifier,
        };
        req.token = token.token;

        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Something went wrong!!",
            error,
            data: "",
        });
    }
};

module.exports.validateSecret = async function (req, res, next) {
    if (!req.body.secret && !req.query.secret) {
        return res
            .json({
                status: false,
                message: "No Secret Given",
            })
            .status(401);
    }

    if (
        (req.body.secret && req.body.secret != config.phpToken) ||
        (req.query.secret && req.query.secret != config.phpToken)
    ) {
        return res
            .json({
                status: false,
                message: "Invalid Secret",
            })
            .status(401);
    }
    delete req.body.secret;
    delete req.query.secret;
    next();
};

// module.exports.cacheBuster = (req, res, next) => {
//     res.setHeader('Last-Modified', (new Date()).toUTCString())
//     req.session.hits++
//     next()
// }
