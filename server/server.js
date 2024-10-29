const express = require("express");


const geoCode = require('./geoLocationApi');
const departures = require("./departures");

const app = express();

const cors = require("cors");

require("dotenv").config();



const port = 8080;




const corsOptions = {
origin: ["http://localhost:5173"], //where the app is running
};

app.use(express.json(), cors(corsOptions));

app.post('/geocode', async (req, res) => {
  try {
    const address = req.body.address;
    const coordinates = await geoCode(address);
    res.json(coordinates);
  } catch (error) {
    res.status(500).json({ error: 'Geocoding failed' });
  }
});


app.use("/api/departures", departures);

// When someone visits URL: http://localhost:8080/api/departures, the server will respond
// run server: npm run server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// When someone visits URL: http://localhost:8080/api/departures, the server will respond
// run server: npm run server


