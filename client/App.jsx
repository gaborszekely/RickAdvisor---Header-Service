import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import convertNum from './helpers/convertNum';

import ReviewStars from './ReviewStars/index';
import styles from './css/styles.scss';
import './helpers/loadIcons';

const {
  upper__wrapper,
  wrapper,
  hotel__ranking,
  hotel__website,
  hotel__save,
} = styles;

const iconStyle = {
  marginRight: '5px',
};

const App = ({ hotel }) => (
  <div>
    <h1>{hotel.name}</h1>
    <div className={upper__wrapper}>
      <div>
        <div className={wrapper}>
          <div>
            <ReviewStars rating={hotel.rating} total={convertNum(3185)} />
          </div>
          <div className={hotel__ranking}>{`#${
            hotel.ranking
          } of 100 hotels in ${hotel.city}`}</div>
        </div>
        <div className={wrapper}>
          <div>
            <FontAwesomeIcon
              icon="map-marker-alt"
              color="#5DA880"
              style={iconStyle}
            />
            <span>{hotel.address}</span>
          </div>
          <div>
            <FontAwesomeIcon icon="phone" color="#5DA880" style={iconStyle} />
            <span>{hotel.phone}</span>
          </div>
          <div>
            <FontAwesomeIcon icon="globe" color="#5DA880" style={iconStyle} />
            <a className={hotel__website} href={hotel.url}>
              Visit hotel website
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className={`${wrapper} ${hotel__save}`}>
          <div>
            {/* put icon here */}
            <span>Save</span>
          </div>
          <div>
            {/* put icon here */}
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  hotel: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
