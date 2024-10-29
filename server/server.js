const express = require("express");
const cors = require("cors");
const departures = require("./departures");

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"], //where the app is running
};
app.use(cors(corsOptions));

app.use("/api/departures", departures);

// When someone visits URL: http://localhost:8080/api/departures, the server will respond
// run server: npm run server
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
