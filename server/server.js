//A  basic express server
// import express from 'express';//Import Express framework
// import dotenv from 'dotenv';// For environment variables
// import trafficRoutes from './traffic.js';
const express = require("express");
const cors = require ("cors");
const traffic = require("./traffic.js");


  
// dotenv.config();  //Load environment variables.

const app = express(); // Creating an instance of Express
const corsOptions = {
    origin: ["http://localhost:5173"], //where the app is running
  };

  
const port = 3000; //Port 3000 is set

app.use(cors(corsOptions)); //Middlewate to parse JSON request bodies

// Use the traffic routes
app.use('/api/traffic', traffic); //setting up a base route first

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});