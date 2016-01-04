import React from 'react';
import style from './ReviewForm.css';
import repeat from 'lodash/string/repeat';
import RatingControl from '../RatingControl/RatingControl';

function ReviewForm(props) {
    return (
        <div className={style.container}>
            <div className={style.title}>Ваш отзыв</div>
            <div className={style.rating}>
                <RatingControl rating={props.rating} />
            </div>
            <textarea className={style.text} value={props.text} />
            <button className={style.submit}>Отправить</button>
        </div>
    );
}

ReviewForm.propTypes = {
    id: React.PropTypes.number,
    rating: React.PropTypes.number,
    text: React.PropTypes.string
};

ReviewForm.propDemos = {
    default: {
        id: 1,
        rating: 0,
        text: 'Awesome vape'
    },
    worst: {
        id: 1,
        rating: 2,
        text: 'Worst liquid ever'
    },
    long: {
        id: 1,
        rating: 8,
        text: repeat('Very long and informative review with many words. ', 10)
    }
};

export default ReviewForm;
