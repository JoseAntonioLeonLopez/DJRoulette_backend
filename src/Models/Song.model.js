// models/Song.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
