import React from 'react';
import style from './Rating.css';
import repeat from 'lodash/string/repeat';
import StarRating from '../StarRating/StarRating';

function Rating(props) {
    let rating = props.rating > 0 ? props.rating : 'Нет оценок';

    return (
        <div className={style.container}>
            <StarRating rating={props.rating} totalStars={10} size={16} />
            <span className={style.number}>{rating}</span>
        </div>
    );
}

Rating.propTypes = {
    rating: React.PropTypes.number,
};

Rating.propDemos = {
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

export default Rating;
