const faker = require('faker');

const generateHotelName = () => {
  const randomSuffixes = [
    'Hotel',
    'Inn',
    'Resort',
    'Lodge',
    'Deluxe',
    'Courtyard',
  ];

  return `${faker.address.city()} ${
    randomSuffixes[Math.floor(Math.random() * randomSuffixes.length)]
  }`;
};

const generateAddress = () => {
  const types = ['Street', 'Drive', 'Circle', 'Boulevard'];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const { streetAddress, city, stateAbbr, zipCode } = faker.address;
  return streetAddress() + ' ' + randomType + ', Estes Park, CO, 80604';
};

const generateRating = () => {
  const rand = Math.ceil(Math.random() * 10);
  let rating;

  if (rand >= 1 && rand < 4) {
    rating = 5;
  } else if (rand >= 4 && rand < 7) {
    rating = 4;
  } else if (rand >= 7 && rand < 9) {
    rating = 3;
  } else if (rand === 9) {
    rating = 2;
  } else {
    rating = 1;
  }

  return rating;
};
const generateRankings = () =>
  Array.from({ length: 100 }, (v, k) => k + 1).filter(i => i !== 3);

const generateHotels = (n = 99) => {
  const hotels = [];
  const rankings = generateRankings();

  for (let i = 0; i < n; i++) {
    const newHotel = {};
    newHotel.name = generateHotelName();
    newHotel.address = generateAddress();
    newHotel.city = 'Estes Park';
    newHotel.url = 'http://www.google.com';
    newHotel.phone = faker.phone.phoneNumberFormat();
    newHotel.rating = generateRating();
    const randIndex = Math.floor(Math.random() * rankings.length);
    newHotel.ranking = rankings.splice(randIndex, 1)[0];

    hotels.push(newHotel);
  }

  return hotels;
};

module.exports = generateHotels;
