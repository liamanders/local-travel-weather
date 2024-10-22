const express = require("express");
const cors = require("cors");
const departures = require("./departures");
const geoCode = require("./geoLocationApi");

require("dotenv").config();

const app = express();

const port = 8080;

const corsOptions = {
  origin: ["http://localhost:5173"], //where the app is running
};

app.use(express.json(), cors(corsOptions));

app.get("/geocode", async (req, res) => {
  try {
    const address = req.body.address;
    const coordinates = await geoCode(address);
    res.json(coordinates);
  } catch (error) {
    res.status(500).json({ error: "Geocoding failed" });
  }
});

app.use("/api/departures", departures);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
