const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')
const autoIncrement = require('mongoose-auto-increment')

const registerDetails = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    mobileNo: {
        type: String,
    },
    emailId: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    dob: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    pincode: {
        type: String,
    },
    country: {
        type: String,
    }
},
{
    timestamps: true,
})


autoIncrement.initialize(mongoose.connection)
registerDetails.plugin(uniqueValidator, {
    message: 'already exists.',
})

registerDetails.plugin(autoIncrement.plugin, {
    model: 'registerdetails',
    field: '_id',
    startAt: 101
})

const registerSchema = mongoose.model('registerdetails', registerDetails)
module.exports = registerSchema;