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
  .get('/hotels/:name', async (req, res) =>
    res.json(await Hotel.find({ name: req.params.name }))
  )
  .post('/hotels/create', async (req, res) => {
    const newHotel = new Hotel(req.body);
    const hotel = await newHotel.save();
    res.json(hotel);
  });

module.exports = router;
