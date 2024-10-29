import express from "express";
import axios from "axios";

const router = express.Router();



// Traffic routes will be defined here. 
//When someone visits URL: /api/traffic, the server will respond with the Traffic updates 
router.get("/", (req, res) => {
    const API_URL = 'https://api.trafikinfo.trafikverket.se/v2/data.json';
    const long = "592554"; //Will be changed later on, hardcoding some values now.
    const lat = "6500334";  //Will be changed later on, hardcoding some values now.
    const authenticationKey = process.env.AUTH_KEY;
   
    if (!authenticationKey) {
        return res.status(500).json({ error: 'Authentication key not found' });
    }

    // Fetch data from the API within a certain radius(10000m in this case). 
    //Code copied from Trafikverkets example code. Object type is Situation here, as the relavant traffic data is in Situtaion endpoint. 
    fetch(API_URL, {
        method: 'POST',
      
          body :`<REQUEST>
             <LOGIN authenticationkey="${authenticationKey}" />
             <QUERY objecttype="Situation" schemaversion="1.5" >
            <FILTER>
            <WITHIN name="Deviation.Geometry.Point.SWEREF99TM" shape="center"
                        value="${long} ${lat}" radius="10000" />
            </FILTER>
        </QUERY>
                   </REQUEST>`
})

  
    .then(response => response.json()) //parsing the response into JSON format. 

    .then(data => {

        //Situtation end point's response is in this path : "RESPONSE":{"RESULT":[{"Situation":.....
        //Result is an array of Situation. "RESULT":[{"Situation":[{}, {}, {}...], so we will store RESULT in results. 
        const results = data.RESPONSE.RESULT; 

        const trafficData = [];  //A variable created to store the final relavant traffic information in array form. 

        //for each element in results, we iterate through every Situation. 
        results.forEach(element => { 
            
            const situations = element.Situation; //Situation in results is also an array of objects, hence naming/storing it as situations.  
            
            situations.forEach(element => {  //with each element in situations, we read through Deviation. 
                const deviations = element.Deviation;  //Deviation is also an array of objects, hence naming/storing it as deviations. 
            
                deviations.forEach(element => { //with each element of deviations, we collect each deviation into trafficData. 
                    console.log(element);
                    trafficData.push(element);
                })

            })
         })
          
         res.json(trafficData); // sending the trafficdata/deviations in response to this .get request. 
    })

    .catch(error => {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: error.message }); // Handle errors
    });
});



export default router;