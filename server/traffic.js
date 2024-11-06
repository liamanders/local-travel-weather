const express = require("express");
const axios = require("axios");
const router = express.Router();

// Traffic route for traffic updates
router.get("/", async (req, res) => {
  const { latitude, longitude } = req.query;

  // Validate latitude and longitude
  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required" });
  }

  const API_URL = "https://api.trafikinfo.trafikverket.se/v2/data.json";
  const authenticationKey = process.env.AUTH_KEY;

  if (!authenticationKey) {
    return res.status(500).json({ error: "Authentication key not found" });
  }

  try {
    const response = await axios.post(
      API_URL,
      `<REQUEST>
<LOGIN authenticationkey="${authenticationKey}" />
<QUERY objecttype="Situation" schemaversion="1.5">
<FILTER>
<WITHIN name="Deviation.Geometry.Point.WGS84" shape="center"
                    value="${longitude} ${latitude}" radius="10000m" />
</FILTER>
</QUERY>
</REQUEST>`,
      { headers: { "Content-Type": "application/xml" } }
    );

    const results = response.data.RESPONSE.RESULT;
    const trafficData = [];

    results.forEach((element) => {
      element.Situation?.forEach((situation) => {
        situation.Deviation?.forEach((deviation) => {
          trafficData.push(deviation);
        });
      });
    });

    res.json(trafficData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
