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

// Agregar nuevas canciones
router.post('/songs', async (req, res) => {
  const songs = req.body; // Asumiendo que req.body es un array de canciones

  try {
    const newSongs = await Song.insertMany(songs);
    res.status(201).json(newSongs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Borrar todas las canciones
router.delete('/songs', async (req, res) => {
  try {
    const result = await Song.deleteMany(); // Eliminar todas las canciones
    res.json({ message: 'Todas las canciones han sido eliminadas', result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Borrar una canción específica por título y artista
router.delete('/songs/:title/:artist', async (req, res) => {
  try {
    const { title, artist } = req.params;
    const result = await Song.deleteOne({ title, artist });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Canción no encontrada' });
    }
    res.json({ message: 'Canción eliminada exitosamente', result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
