const mongoose = require('mongoose');

// Defining data shema for application forms.
const applicationschema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Photo:{
        type:String,
        required:true
    },
    UserID:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    }
})

// Configuring applicationmodel with data schema.
const Applicationmodel = mongoose.model('applications',applicationschema);

module.exports = {
    Applicationmodel
}