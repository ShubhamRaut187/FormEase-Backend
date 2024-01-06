//Modules
const express = require('express');
const cors = require('cors')

// Database Connection
const {connection} = require('./Configuration/db.js');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to FormEase backend server.');
})


// Server connection to database
app.listen(8000,async()=>{
    try {
        await connection;
        console.log('Connection established on port 8000 to FormEase Database.');
    } catch (error) {
        console.log('Error connecting database',error);
    }
})