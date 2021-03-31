const express = require('express');
const postNewLocationRouter = express.Router();
const mongoose = require('mongoose');
const Locations = require('../models/SecretLocation.js');

postNewLocationRouter.post('/newSpot', async(req, res) => {
  let id = await Locations.countDocuments();
  let name = await req.body.name;
  let description = req.body.description;
  let founder = req.body.founder;
  let location = req.body.location;
  let images =  req.body.images;
  let difficulty = req.body.difficulty;

  let formattedDifficulty = {
    'Easy': 0,
    'Medium': 0,
    'Hard': 0
  }

  if (difficulty === 'Hard') {
    formattedDifficulty.Hard = 1
  } else if (difficulty === 'Medium') {
    formattedDifficulty.Medium = 1
  } else if (formattedDifficulty === 'Easy') {
    formattedDifficulty.Easy = 1
  };

  let date = new Date();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let yyyy = date.getFullYear();
  date = `${mm}-${dd}-${yyyy}`;

  let formattedDoc =  new Locations({
    id: id + 1,
    name: name,
    description: description,
    date_discovered: date,
    founder: founder,
    petYes: 0,
    petNo: 0,
    difficulty: formattedDifficulty,
    popularity: 0,
    explorer_points: 0,
    images: images,
    location: location
  });

  try {
    await formattedDoc.save();
    res.send('Location has been added.')
  }
  catch(err) {
    console.log(err);
  }
});

module.exports = postNewLocationRouter;