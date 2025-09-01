const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Willkommen zur Todo-App API!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
