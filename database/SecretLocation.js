const mongoose = require('mongoose');
const Any = new Schema({ any: {} })

const secretLocationSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date_discovered: {
    type: String,
    required: true
  },
  founder: {
    type: String,
    required: true
  },
  petYes: {
    type: Number,
    required: true
  },
  petNo: {
    type: Number,
    required: true
  },
  difficulty: {
    type: Any,
    required: true
  },
  popularity: {
    type: Number,
    required: true
  },
  explorer_points: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  location: {
    type: Any,
    required: true
  }
}, { collection: 'Locations'});

module.exports = mongoose.model('Locations', secretLocationSchema);