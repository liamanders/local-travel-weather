//A  basic express server
import express from 'express';//Import Express framework
import axios from 'axios';// Import Axios for making HTTP requests
import dotenv from 'dotenv';// For environment variables
import trafficRoutes from './traffic.js';


dotenv.config();  //Load environment variables.

const app = express(); // Creating an instance of Express
const port = process.env.PORT || 3000; //Port 3000 is set

app.use(express.json()); //Middlewate to parse JSON request bodies

// Use the traffic routes
app.use('/api/traffic', trafficRoutes); //setting up a base route first

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});