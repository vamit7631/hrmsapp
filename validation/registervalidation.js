
const Joi = require('@hapi/joi');

module.exports.createValidation = async function (data) {
    const createRegisterSchema = Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        mobileNo: Joi.string().length(10).required(),
        emailId: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        dob: Joi.string().required(),
        gender: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        pincode: Joi.string().required(),
        country: Joi.string().required()
    });

    return await Joi.validate(data, createRegisterSchema);
}