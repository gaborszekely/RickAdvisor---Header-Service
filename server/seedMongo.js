const Hotel = require('./hotelModel');
const generateHotels = require('./seed');

const seedMongo = async () => {
  const hotels = generateHotels();
  for (let hotel of hotels) {
    const newHotel = new Hotel(hotel);
    try {
      await newHotel.save();
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = seedMongo;
