const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');
const port = process.env.PORT || 3005;

/* mongodb://localhost:27017/hotelService */
mongoose
  .connect('mongodb://localhost:27017/hotelService', { useNewUrlParser: true })
  .then(() => console.log('Mongoose connected'))
  .catch(console.error);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', router);

app.listen(port, () => console.log(`Express server running on port ${port}`));
//
//
