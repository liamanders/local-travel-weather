const express = require("express");
const geoCode = require('./geoLocationApi');

const app = express();
const cors = require("cors");

const port = 8080;



const corsOptions = {
origin: ["http://localhost:5173"], //where the app is running
};

require("dotenv").config();

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

app.get("/api", (req, res) => {
  res.json({}); //the response goes here
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});