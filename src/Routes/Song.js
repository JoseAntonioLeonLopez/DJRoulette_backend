const express = require('express');
const songSchema = require('../Models/Song');

const router = express.Router();

// Meter canciones
router.post('/songs', (req, res) => {
    const song = songSchema(req.body);
    song
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// Obtener todas las canciones
router.get('/songs', (req, res) => {
  songSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
