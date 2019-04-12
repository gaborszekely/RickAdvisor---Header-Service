import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';

const AppState = ({ hotelName }) => {
  const [hotel, setHotel] = useState({});
  const [bookmark, setBookmark] = useState(false);
  const [share, setShare] = useState(false);
  const toggleBookmark = () => setBookmark(!bookmark);
  const toggleShare = () => setShare(!share);

  useEffect(() => {
    fetch(`http://localhost:3005/api/hotels/${hotelName}`)
      .then(res => res.json())
      .then(([data]) => {
        setHotel(data);
      })
      .catch(console.error);
  }, [hotelName]);

  return (
    <App
      hotel={hotel}
      share={share}
      toggleShare={toggleShare}
      bookmark={bookmark}
      toggleBookmark={toggleBookmark}
    />
  );
};

AppState.propTypes = {
  hotelName: PropTypes.string.isRequired,
};

ReactDOM.render(
  <AppState hotelName="Stanley Hotel" />,
  document.getElementById('header')
);

export default AppState;
