const Hotel = require('./hotelModel');
const generateHotels = require('./seed');

const seedMongo = async (n = 99) => {
  const hotels = generateHotels(n);
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
