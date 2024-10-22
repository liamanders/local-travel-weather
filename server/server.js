const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"], //where the app is running
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({}); //the response goes here
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
