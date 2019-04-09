import React from 'react';
import PropTypes from 'prop-types';

import {
  review__stars__full,
  review__stars__empty,
  review__stars__wrapper,
  review__stars__description,
  stars__wrapper,
} from './reviewStars.scss';

const renderStars = rating => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <div
        key={i}
        className={i <= rating ? review__stars__full : review__stars__empty}
      />
    );
  }
  return stars;
};

const ReviewStars = ({ rating, total }) => {
  const stars = renderStars(rating);

  return (
    <div className={review__stars__wrapper}>
      <div className={stars__wrapper}>{stars}</div>
      <div className={review__stars__description}>{total} reviews</div>
    </div>
  );
};

ReviewStars.propTypes = {
  rating: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ReviewStars;
