const registerserviceObj = require('../services/registerservice');
const registervalidateObj = require('../validation/registervalidation')

module.exports.registerDetails = async function (req, res) {
    try {
    //    await registervalidateObj.createValidation(req.body);
        let result = await registerserviceObj.registerDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getAllDetails = async function (req, res) {
    try {
        let result = await registerserviceObj.getAllDetails(req.body)
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        return res.status(400).json({ 'err' : e});
    }
}

module.exports.loginDetails = async function (req, res) {
    try {

        let result = await registerserviceObj.loginDetails(req.params);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        return res.status(400).json({ 'err': e , "message": "Data Not Found"});
    }
}