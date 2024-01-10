//Modules
const express = require('express');
const cors = require('cors')

// Database Connection
const {connection} = require('./Configuration/db.js');

// Routes
const {AuthRoutes} = require('./Routes/AuthRoutes.js')
const {UserRoutes} = require('./Routes/UserRoutes.js')
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
app.use('/user',UserRoutes)
app.use('/application',AplicationRoutes);

// Server connection to database
app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`Connection established on port ${process.env.PORT} to FormEase Database.`);
    } catch (error) {
        console.log('Error connecting database',error);
    }
})