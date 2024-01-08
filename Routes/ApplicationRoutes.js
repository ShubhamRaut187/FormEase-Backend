const {Router} = require('express');

// Data Model
const {Applicationmodel} = require('../DataModels/Application.model')

// Middlewares
const {Authentication} = require('../Middlewares/Authentication')
const {ApplicationAuth} = require('../Middlewares/ApplicationAuth')

const AplicationRoutes = Router();

// CRUD operations on application.

// Create apllication route
AplicationRoutes.post('/v1/create',Authentication,async(req,res)=>{
    const {Name,DOB,Address,Photo,UserID} = req.body;
    try {
        const New_Application = new Applicationmodel({
            Name,
            DOB,
            Address,
            Photo,
            UserID
        })
        await New_Application.save();
        res.status(201).send({'Message':'Application submitted successfully.'});
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

// Get all application route
AplicationRoutes.get('/v1/',Authentication,async(req,res)=>{
    try {
        const Applications = await Applicationmodel.find({});
        res.status(200).send({'Message':'All applications','Applications':Applications});
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

// Get all application of single user
AplicationRoutes.get('/v1/all/:uid',Authentication,ApplicationAuth,async(req,res)=>{
    const {uid} = req.params;
    try {
        const Applications = await Applicationmodel.find({UserID:uid});
        res.status(200).send({'Message':`All applications of ${uid} .`,'Applications':Applications});
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

// Get Single Application
AplicationRoutes.get('/v1/single/:id',Authentication,async(req,res)=>{
    const {id} = req.params;
    try {
        const Application = await Applicationmodel.findOne({_id:id});
        res.status(200).send({'Message':`Apllication ${id} .`,'Applications':Application});
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

// Update application
AplicationRoutes.patch('/v1/update/:id',Authentication,async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    try {
        const Updated_application = await Applicationmodel.findOneAndUpdate({_id:id},data,{new:true});
        res.status(200).send({'Message':`Apllication updated successfully.`,'Applications':Updated_application});
    } catch (error) {
        // console.log(error);
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

// Delete Application
AplicationRoutes.delete('/v1/delete/:id',Authentication,async(req,res)=>{
    const {id} = req.params;
    try {
        const Deleted_application = await findOneAndDelete({_id:id});
        res.status(200).send({'Message':`Apllication deleted successfully.`,'Applications':Deleted_application});
    } catch (error) {
        res.status(500).send({'Message':'Internal Server Error','Error':error});
    }
})

module.exports = {
    AplicationRoutes
}