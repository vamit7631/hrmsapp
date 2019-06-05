const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')
const autoIncrement = require('mongoose-auto-increment')

const userAuthDetails = new Schema({
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
    statusval: {
        type: Boolean,
    },
},
{
    timestamps: true,
})


autoIncrement.initialize(mongoose.connection)
userAuthDetails.plugin(uniqueValidator, {
    message: 'already exists.',
})

userAuthDetails.plugin(autoIncrement.plugin, {
    model: 'userroleDetails',
    field: 'user_Id',
    startAt: 101
})

const userAutSchema = mongoose.model('userroleDetails', userAuthDetails)
module.exports = userAutSchema;