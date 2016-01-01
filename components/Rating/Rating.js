import React from 'react';
import style from './Rating.css';
import repeat from 'lodash/string/repeat';

function Rating(props) {
    let stars = [];
    for (var i = 0; i < 10; i++) {
        let starStyle = i < props.rating ? style.active : style.inactive;
        let star = <span className={starStyle}>★</span>;
        stars.push(star);
    }

    let rating = props.rating > 0 ? props.rating : 'Нет оценок';

    return (
        <div className={style.container}>
            {stars}
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
