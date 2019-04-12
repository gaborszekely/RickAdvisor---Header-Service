const mongoose = require('mongoose');
const seedMongo = require('./seedMongo');

mongoose
  .connect('mongodb://database/hotelService', { useNewUrlParser: true })
  .then(async () => {
    console.log('Mongoose connected');
    console.log('Seeding has begun...');
    await seedMongo();
    console.log('Seeding finished');
  })
  .catch(console.error);
