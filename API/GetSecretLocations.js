const express = require('express');
const getSecretLocationsRouter = express.Router();
const mongoose = require('mongoose');
const Locations = require('../models/SecretLocation.js');

getSecretLocationsRouter.get('/secretSpots', async(req,res) => {
  let userLocation = req.body.userLocation;
  // Get userlat and lng
  let lat = userLocation.lat;
  let lng = userLocation.lng;
  // Get higher and lower bounds for filtering locations
  let upperLat = lat + 0.50;
  let lowerLat = lat - 0.50;
  let upperLng = lng + 0.50;
  let lowerLng = lng - 0.50;
  // Design logic to find locations by proximity
  // 1 degree of latitude (moving N or S) is about 60 miles
  // 1 degree of longitude (moving E or W) is about 60 miles
  // 0.1 of each would be roughly 6 miles
  // 0.5 degrees in each direction gives a radius of about 30 miles or diameter of 60 miles <-- Much more reasonable
  // May have to go down to 0.25 degrees to reduce entire diameter to 30 miles so that it fits our map

  // find locations filter = userLatitude - 0.25deg <= LATITUDE <= userLatitude + 0.25deg && userLongitude - 0.25deg <= LONGITUDE <= userLongitude + 0.25deg
  // add indexing to location since we are querying by location
  try {
    const locations = await Locations.find({ location: {
      lat: lowerLat <= lat <= upperLat,
      lng: lowerLng <= lng <= upperLng
    }});
    res.send(locations);
  }
  catch(err) {
    console.log(err);
  }
});

module.exports = getSecretLocationsRouter;