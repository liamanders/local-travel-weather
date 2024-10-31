const axios = require('axios');

const geoCode = async (address) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address,
        key: process.env.GEOCODING_API_KEY
      }
    });

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng
      };
    } else {
      throw new Error('Geocoding failed: ' + response.data.status);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = geoCode;