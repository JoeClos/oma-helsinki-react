const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    age:{
        type: Number,
        required: false,
    },
    username: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;