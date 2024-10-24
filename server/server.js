//A  basic express server
// import express from 'express';//Import Express framework
// import dotenv from 'dotenv';// For environment variables
// import trafficRoutes from './traffic.js';
const express = require("express");
const cors = require ("cors");
const dotenv = require('dotenv');
const traffic = require("./traffic.js");
const corsOptions = {
    origin: ["http://localhost:5173"],
}
  
dotenv.config();  //Load environment variables.

const app = express(); // Creating an instance of Express to handle incoming requests

//Middleware
app.use(cors(corsOptions)); //enables CORS
app.use(express.json()); //Allows the server to handle JSON request bodies.

const port = 3000; //Port 3000 is set


// Use the traffic routes
app.use('/api/traffic', traffic); //setting up a base route first

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});