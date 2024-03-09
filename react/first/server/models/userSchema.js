const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    gender: String,
    password: String,
    branch: String,
    confirmPassword: String,
    phone: String,
    address: String,
    residence: String,
    profile_pic: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;