import express from "express";
import cors from "cors";
import geoCode from "./geoLocationApi.js";
import departures from "./departures.js";
import traffic from "./traffic.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = 8080;

const corsOptions = {
  origin: ["http://localhost:5173"], //where the app is running
};

app.use(express.json(), cors(corsOptions));

app.post("/geocode", async (req, res) => {
  try {
    const address = req.body.address;
    const coordinates = await geoCode(address);
    res.json(coordinates);
  } catch (error) {
    res.status(500).json({ error: "Geocoding failed" });
  }
});

app.use("/api/departures", departures);
app.use("/api/traffic", traffic); 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

  
dotenv.config();  //Load environment variables.


// //Middleware
app.use(cors(corsOptions)); //enables CORS
app.use(express.json()); //Allows the server to handle JSON request bodies.
