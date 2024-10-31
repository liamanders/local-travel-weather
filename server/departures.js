const express = require("express");
const axios = require("axios");

require("dotenv").config();
const router = express.Router();

// Trafiklab API details
const apiKey = process.env.TRAFIKLAB_API_KEY;
const stationsProximityApiUrl = `https://api.resrobot.se/v2.1/location.nearbystops`;
const departureBoardApiUrl = `https://api.resrobot.se/v2.1/departureBoard`;

// Get nearby station ID
const getNearbyStationId = async (lat, long) => {
  try {
    const response = await axios.get(stationsProximityApiUrl, {
      params: {
        originCoordLat: lat,
        originCoordLong: long,
        format: "json",
        accessId: apiKey,
      },
    });
    const nearbyStations = await response.data;
    if (nearbyStations) {
      const nearestStation =
        nearbyStations.stopLocationOrCoordLocation[0].StopLocation;
      return nearestStation.id;
    }
    return "";
  } catch (error) {
    console.error("Error fetching nearby stations:", error.message);
    throw error;
  }
};

// Get departures for a station
const getDepartures = async (stationId) => {
  try {
    const response = await axios.get(departureBoardApiUrl, {
      params: {
        id: stationId,
        format: "json",
        accessId: apiKey,
      },
    });
    const departures = await response.data;
    if (departures) {
      const filteredDepartures = departures.Departure.slice(0, 5);
      return filteredDepartures;
    }
    return [];
  } catch (error) {
    console.error("Error fetching departures:", error.message);
    throw error;
  }
};

// Route to get departures based on latitude and longitude from query parameters
router.get("/", async (req, res) => {
  const { latitude, longitude } = req.query;

  // Validate that latitude and longitude are provided
  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required" });
  }

  try {
    const nearbyStationId = await getNearbyStationId(latitude, longitude);
    if (nearbyStationId) {
      const departures = await getDepartures(nearbyStationId);
      res.json({ departures });
    } else {
      res.status(400).json({ error: "No nearby station found" });
    }
  } catch (error) {
    console.error("Error fetching departures:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Export the router
module.exports = router;
