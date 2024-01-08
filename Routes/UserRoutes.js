const {Router} = require('express');

// Data Model
const {Usermodel} = require('../DataModels/User.model')

// Middleware
const {Authentication} = require('../Middlewares/Authentication');

const UserRoutes = Router();

// Routes
// Get single user
UserRoutes.get('/v1/:id',Authentication,async(req,res)=>{
    const {id} = req.params;
    try {
        const User = await Usermodel.findOne({_id:id});
        res.status(200).send({'Message':'User','User':User}); 
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

// Update user
UserRoutes.patch('/v1/update/:id',Authentication,async(req,res)=>{
    const {id} = req.params;
    const data = req.body;
    try {
        const Updated_User = await Usermodel.findOneAndUpdate({_id:id},data,{new:true});
        res.status(200).send({'Message':'User updated successfully','User':Updated_User});
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

// Delete user
UserRoutes.delete('/v1/delete/:id',Authentication,async(req,res)=>{
    const {id} = req.params;
    try {
        const Deleted_User = await Usermodel.findOneAndDelete({_id:id});
        res.status(200).send({'Message':'User deleted successfully','User':Deleted_User});
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

module.exports = {
    UserRoutes
}