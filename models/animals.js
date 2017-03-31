const mongoose = require('mongoose');
const Schema = mongoose.Schema

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
});


// create animals schema
const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  level: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
})

const Animals = mongoose.model("animal", AnimalSchema);

module.exports = Animals;
