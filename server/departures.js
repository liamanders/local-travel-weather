const express = require("express");

const router = express.Router();

// When someone visits URL: http://localhost:8080/api/departures, the server will respond
// run server: npm run server

router.get("/", (req, res) => {
  const API_URL = "https://api.trafikinfo.trafikverket.se/v2/data.json";

  // Fetch data from the API
  fetch(API_URL, {
    method: "POST",
    body: `<REQUEST>
            <LOGIN authenticationkey="6a5bbb279beb4d089d5d158e5adddb96"/>
            <QUERY objecttype="TrainAnnouncement" schemaversion="1.9" limit="10">
            </QUERY>
            </REQUEST>`,
  })
    .then((response) => response.json())
    .then((data) => {
      res.json(data.RESPONSE.RESULT[0].TrainAnnouncement); // Send the data as a response
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: error.message }); // Handle errors
    });
});

// Export the router
module.exports = router;
