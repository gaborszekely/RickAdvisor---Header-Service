const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router');
const PORT = process.env.PORT || 3000;

mongoose
  .connect('mongodb://localhost:27017/hotelService', { useNewUrlParser: true })
  .then(() => console.log('Mongoose connected'))
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
