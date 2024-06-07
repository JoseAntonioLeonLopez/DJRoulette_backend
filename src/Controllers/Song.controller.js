const Song = require('../models/Song.model');

// Obtener todas las canciones
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agregar nuevas canciones
exports.addSongs = async (req, res) => {
  const songs = req.body; // Asumiendo que req.body es un array de canciones

  try {
    const newSongs = await Song.insertMany(songs);
    res.status(201).json(newSongs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Borrar todas las canciones
exports.deleteAllSongs = async (req, res) => {
  try {
    const result = await Song.deleteMany(); // Eliminar todas las canciones
    res.json({ message: 'Todas las canciones han sido eliminadas', result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Borrar una canción específica por título y artista
exports.deleteSongByTitleAndArtist = async (req, res) => {
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
};
