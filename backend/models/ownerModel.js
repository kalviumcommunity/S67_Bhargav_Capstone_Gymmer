const mongoose = require("mongoose");

function validatePassword(value) {
    if (value.length < 8) throw new Error('Password must be at least 8 characters long');
    if (!/[A-Za-z]/.test(value)) throw new Error('Password must contain at least one letter');
    if (!/\d/.test(value)) throw new Error('Password must contain at least one number');
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) throw new Error('Password must contain at least one special character');
    return true;
  }
  

const ownerSchema = new mongoose.Schema({    
    userName: {type: String, maxlength: 25, required: true, unique: true},
    name: {type: String, maxlength: 25, required: true},
    phoneNumber: {type: String, match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number'], required: true, unique: true},
    email: {type: String, required: [true, 'Email is required'], unique: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email']},
    password: {
        type: String, required: [true,'password is required'], minlength: 8,
        validate: { validator: validatePassword}
      },
    profilePic: {type: String, default: ''},
    bio: {type: String,minlength: [10,'minimum 10 characters'], maxlength: [200,'maximum limit Exceeded']}
})

module.exports = mongoose.model("owner",ownerSchema);