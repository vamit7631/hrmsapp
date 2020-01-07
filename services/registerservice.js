const registermodelObj = require('../models/register');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const middleware = require('../config/middleware');

module.exports.registerDetails = async function (data) {
    return await registermodelObj.create(data)
}
module.exports.getAllDetails = async function (data) {
    return await registermodelObj.find(data)
}

module.exports.loginDetails = async function (data) {
    let finalObj;
    let result = await registermodelObj.findOne({ $or: [{ emailId: data.userAuth }, { username: data.userAuth }], password: data.password })
        if ((data.userAuth === result.emailId || data.userAuth === result.username) && data.password === result.password) {
            let token = jwt.sign({ username: result.username },
                config.secret.jwtSecret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            finalObj = {
                message: 'Authentication successful!',
                token: token
            }
        }
        else {
            finalObj = {
                message: 'Data Not Found'
            }
        }
    return finalObj;
}