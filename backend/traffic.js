import express from 'express';
import dotenv from 'dotenv';//Import dotenv to access environment variables
import fetch from 'node-fetch';//// Import fetch for API requests

dotenv.config(); // Load environment variables


const router = express.Router();

// Traffic routes will be defined here. 
//When someone visits URL: /api/traffic, the server will respond with the message 
//"Traffic updates will be here."

router.get('/', (req, res) => {
    const API_URL = 'https://api.trafikinfo.trafikverket.se/v2/data.json';
    const auth_key = process.env.AUTH_KEY; 
    
   // Fetch data from the API
    
    fetch(API_URL, {
        method: 'POST',
      
          body :`<REQUEST>
             <LOGIN authenticationkey="6a5bbb279beb4d089d5d158e5adddb96" />
             <QUERY objecttype="RoadCondition"  schemaversion="1.2" limit="10">
                    <INCLUDE>ConditionText</INCLUDE>\n
                    <INCLUDE>LocationText</INCLUDE>\n
                    <INCLUDE>Warning</INCLUDE>\n
                    <INCLUDE>ConditionInfo</INCLUDE>\n
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
export default router;