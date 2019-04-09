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
  hotel__shareIcon,
} = styles;

const iconStyle = {
  marginRight: '5px',
};

const App = ({ hotel, share, toggleShare, bookmark, toggleBookmark }) => (
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
          <div
            className={hotel__shareIcon}
            onMouseOver={toggleBookmark}
            onMouseOut={toggleBookmark}
          >
            <FontAwesomeIcon
              icon={bookmark ? 'bookmark' : ['far', 'bookmark']}
              size="lg"
              color={bookmark ? '#5da880' : '#444'}
              style={iconStyle}
            />
            <span>Save</span>
          </div>
          <div
            className={hotel__shareIcon}
            onMouseOver={toggleShare}
            onMouseOut={toggleShare}
          >
            <FontAwesomeIcon
              icon="share"
              size="lg"
              color={share ? '#5da880' : '#444'}
              style={iconStyle}
            />
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
  share: PropTypes.bool.isRequired,
  bookmark: PropTypes.bool.isRequired,
  toggleShare: PropTypes.func.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
};

export default App;
