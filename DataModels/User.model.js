const mongoose = require('mongoose');

// Defining data shema for user.
const userschema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

// Configuring usermodel with data schema.
const Usermodel = mongoose.model('users',userschema);

module.exports = {
    Usermodel
}