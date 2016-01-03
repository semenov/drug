import React from 'react';
import style from './RatingControl.css';
import repeat from 'lodash/string/repeat';
import StarRating from '../StarRating/StarRating';

function RatingControl(props) {
    return (
        <StarRating rating={props.rating} totalStars={10} editing={true} size={20} />
    );
}

RatingControl.propTypes = {
    rating: React.PropTypes.number,
};

RatingControl.propDemos = {
    default: {
        rating: 5
    },
    ten: {
        rating: 10
    },
    one: {
        rating: 1
    },
    zero: {
        rating: 0
    }
};

export default RatingControl;
