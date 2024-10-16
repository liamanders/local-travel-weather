// import express from 'express';
// import dotenv from 'dotenv';//Import dotenv to access environment variables
const express = require("express");
 

// dotenv.config(); // Load environment variables


const router = express.Router();

// Traffic routes will be defined here. 
//When someone visits URL: /api/traffic, the server will respond with the Traffic updates 

router.get('/', (req, res) => {
    const API_URL = 'https://api.trafikinfo.trafikverket.se/v2/data.json';
    const long = "592554"; //Will be changed later on, hardcoding some values now.
    const lat = "6500334";  //Will be changed later on, hardcoding some values now.
   
   
    // Fetch data from the API within a certain radius(1000m in this case).
    
    fetch(API_URL, {
        method: 'POST',
      
          body :`<REQUEST>
             <LOGIN authenticationkey="6a5bbb279beb4d089d5d158e5adddb96" />
             <QUERY objecttype="Situation" schemaversion="1.5" limit="10">
            <FILTER>
            <WITHIN name="Deviation.Geometry.Point.SWEREF99TM" shape="center"
                        value="${long} ${lat}" radius="1000" />
            </FILTER>
        </QUERY>
                   </REQUEST>`
})

  
    .then(response => response.json())

    .then(data => {
        res.json(data);
        
    })

    .catch(error => {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: error.message }); // Handle errors
    });
});


// Export the router
// export default router;
module.exports=router;
