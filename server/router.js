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
  )
  .post('/hotels/create', async (req, res) => {
    const newHotel = new Hotel(req.body);
    const hotel = await newHotel.save();
    res.json(hotel);
  });

module.exports = router;
