
const userauthmodelObj = require('../models/userroles');

module.exports.loginDetails = async function (data) {
    console.log(data)
    return await userauthmodelObj.findOne({$or:[{emailId:data.userAuth},{username:data.userAuth}]})
}
