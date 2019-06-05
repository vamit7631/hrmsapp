const registermodelObj = require('../models/register');
const userauthmodelObj = require('../models/userroles');

module.exports.registerDetails = async function (data) {
    await userauthmodelObj.create(data)
    return await registermodelObj.create(data)

}

module.exports.getAllDetails = async function (data) {
    return await registermodelObj.find(data)
}
