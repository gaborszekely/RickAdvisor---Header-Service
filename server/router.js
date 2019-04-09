const express = require('express');
const router = express.Router();
const seedMongo = require('./seedMongo');
const Hotel = require('./hotelModel');

router
  .post('/seed', async (req, res) => {
    await seedMongo();
    res.json(await Hotel.find({}));
  })
  .get('/hotels', async (req, res) => res.json(await Hotel.find({})))
  .get('/hotels/:id', async (req, res) =>
    res.json(await Hotel.find({ _id: req.params.id }))
  );

module.exports = router;
