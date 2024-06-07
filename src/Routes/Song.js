// routes/Song.js
const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Obtener todas las canciones
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Agregar una nueva canción
router.post('/songs', async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    image: req.body.image
  });

  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
