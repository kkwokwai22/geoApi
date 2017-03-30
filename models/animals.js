const mongoose = require('mongoose');
const Schema = mongoose.Schema

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
  }
  // add geo location
})

const Animals = mongoose.model("animal", AnimalSchema);

module.exports = Animals;
