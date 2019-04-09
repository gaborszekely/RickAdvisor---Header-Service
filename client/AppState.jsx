import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';

const AppState = ({ hotelId }) => {
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/hotels/${hotelId}`)
      .then(res => res.json())
      .then(([data]) => {
        console.log(data);
        setHotel(data);
      })
      .catch(console.error);
  }, [hotelId]);

  return <App hotel={hotel} />;
};

AppState.propTypes = {
  hotelId: PropTypes.string.isRequired,
};

ReactDOM.render(
  <AppState hotelId="5cad03f7b570ea532bc9834b" />,
  document.getElementById('root')
);

export default AppState;
