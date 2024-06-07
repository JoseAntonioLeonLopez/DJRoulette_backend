const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const songRoutes = require("./Routes/Song");

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(`/${process.env.NAME_APPLICATION}`, songRoutes);

// MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.error('Error de conexión a MongoDB:', error));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});