const express = require('express');
const router = express.Router();
const songController = require('../Controllers/Song.controller');

// Obtener todas las canciones
router.get('/songs', songController.getAllSongs);

// Agregar nuevas canciones
router.post('/songs', songController.addSongs);

// Borrar todas las canciones
router.delete('/songs', songController.deleteAllSongs);

// Borrar una canción específica por título y artista
router.delete('/songs/:title/:artist', songController.deleteSongByTitleAndArtist);

module.exports = router;
