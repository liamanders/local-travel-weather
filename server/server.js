const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const cors = require("cors");
const departures = require("./departures");

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"], //where the app is running
};
app.use(cors(corsOptions));

app.use("/api/departures", departures);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
