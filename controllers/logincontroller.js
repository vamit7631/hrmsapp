const loginserviceObj = require('../services/loginservice');

module.exports.loginDetails = async function (req, res) {
    try {

        let result = await loginserviceObj.loginDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        return res.status(400).json({ 'err': e });
    }
}