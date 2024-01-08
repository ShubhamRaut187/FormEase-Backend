//Modules
const express = require('express');
const cors = require('cors')

// Database Connection
const {connection} = require('./Configuration/db.js');

// Routes
const {AuthRoutes} = require('./Routes/AuthRoutes.js')
const {AplicationRoutes} = require('./Routes/ApplicationRoutes.js')

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to FormEase backend server.');
})
app.use('/auth',AuthRoutes);
app.use('/application',AplicationRoutes);

// Server connection to database
app.listen(8000,async()=>{
    try {
        await connection;
        console.log('Connection established on port 8000 to FormEase Database.');
    } catch (error) {
        console.log('Error connecting database',error);
    }
})