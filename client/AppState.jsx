import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const AppState = ({ hotelId }) => {
  const [hotel, setHotel] = useState({});
  const [bookmark, setBookmark] = useState(false);
  const [share, setShare] = useState(false);
  const toggleBookmark = () => setBookmark(!bookmark);
  const toggleShare = () => setShare(!share);

  useEffect(() => {
    fetch(`http://localhost:3000/api/hotels/${hotelId}`)
      .then(res => res.json())
      .then(([data]) => {
        setHotel(data);
      })
      .catch(console.error);
  }, [hotelId]);

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
  hotelId: PropTypes.string.isRequired,
};

ReactDOM.render(
  <AppState hotelId="5cad22d0f6c2dc08d14743c5" />,
  document.getElementById('root')
);

export default AppState;
