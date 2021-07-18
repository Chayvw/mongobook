const mongoose = require("mongoose");
const validator = require("validator");


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required:"Author  name is required"
    },

    email: {
        type: String,
        trim: true,
        require: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],

    },

    password: {
        type: String,
        trim: true,
        required:"Please provide a password",
        minlength: 6
    },

    passwordConfirm: {
        type: String,
        trim: true,
        required:true
    },

    
});


const User= mongoose.model("User", userSchema);

module.exports = User;