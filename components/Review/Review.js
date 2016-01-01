import React from 'react';
import style from './Review.css';
import repeat from 'lodash/string/repeat';
import Rating from '../Rating/Rating';

function Review(props) {
    return (
        <div className={style.container} key={props.id}>
            <div className={style.author}>{props.author}</div>
            <div className={style.rating}>
                <Rating rating={props.rating} />
            </div>
            <div className={style.text}>{props.text}</div>
        </div>
    );
}

Review.propTypes = {
    id: React.PropTypes.number,
    author: React.PropTypes.string,
    rating: React.PropTypes.number,
    text: React.PropTypes.string
};

Review.propDemos = {
    default: {
        id: 1,
        author: 'Alice',
        rating: 10,
        text: 'Awesome vape'
    },
    worst: {
        id: 1,
        author: 'Bob',
        rating: 2,
        text: 'Worst liquid ever'
    },
    long: {
        id: 1,
        author: 'John',
        rating: 8,
        text: repeat('Very long and informative review with many words. ', 10)
    }
};

export default Review;
