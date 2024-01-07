// Modules
const {Router} = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Data Model
const {Usermodel} = require('../DataModels/User.model')

// Middlewares
const {AuthDataCheck} = require('../Middlewares/AuthDataCheck')
const {PasswordCheck} = require('../Middlewares/PasswordCheck')
const {EmailCheck} = require('../Middlewares/EmailCheck')

const AuthRoutes = Router();

// Routes
// Signup Route
AuthRoutes.post('/v1/signup',AuthDataCheck,EmailCheck,PasswordCheck,async(req,res)=>{
    const {Name,Email,Password} = req.body;
    try {
        const Hash = bcrypt.hashSync(Password,8) 
        const New_User = new Usermodel({
            Name,
            Email,
            Password:Hash
        })
        await New_User.save();
        res.status(200).send({'Message':'Signup Successfull...!','User':New_User});
    } catch (error) {
        console.log(error);
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})


// Login Route
AuthRoutes.post('/v1/login',async(req,res)=>{
    const {Email,Password} = req.body;
    try {
        const User = await Usermodel.findOne({Email:Email});
        if(!User){
            res.status(404).send({'Message':'Please signup...!'});
        }
        const Hash = User.Password;
        const Correct_Password = bcrypt.compareSync(Password,Hash);
        if(Correct_Password){
            const Token = jwt.sign({UserID:User._id},'AuthToken');
            const UserInfo = {
                Name:User.Name,
                Email:User.Email
            }
            res.status(200).send({'Message':'Login Successfull.','User':UserInfo,'Token':Token});
        }
        else{
            res.status(401).send({'Message':'Wrong Password'})
        }
    } catch (error) {
       res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

module.exports = {
    AuthRoutes
}