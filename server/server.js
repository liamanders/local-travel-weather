const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const departures = require("./departures");

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
