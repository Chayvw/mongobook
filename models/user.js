const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


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
        required:false,
        // only will work on .create and .save
        validator: function(el){
            return el ===this.password
        },
        message: "Passwords are not the same"
    },
    
});
userSchema.pre("save", async function (next) {
    // only will run if password was modified
    if(!this.isModified("password"))
    return next();
// asyncschrous version off has and it will return a promise so we will use await 
    this.password = await  bcrypt.hash(this.password, 12)

    // will set the passwordConfirm will be set to undefined 
    this.passwordConfirm = undefined;
    next();


});


const User= mongoose.model("User", userSchema);

module.exports = User;