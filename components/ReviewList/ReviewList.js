import React from 'react';
import style from './ReviewList.css';
import repeat from 'lodash/string/repeat';
import Review from '../Review/Review';

function ReviewList(props) {
    let reviews;
    let count;

    if (props.reviews.length > 0) {
        reviews = props.reviews.map(review => {
            return <Review {...review} />;
        });
        count = props.reviews.length;
    } else {
        reviews = <div>Пока нет отзывов</div>
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Отзывы<sup className={style.count}>{count}</sup></div>
            <div className={style.reviews}>
                {reviews}
            </div>
        </div>
    );
}

ReviewList.propTypes = {
    reviews: React.PropTypes.array
};

ReviewList.propDemos = {
    default: {
        reviews: [
            {
                id: 1,
                author: 'Alice',
                rating: 10,
                text: 'Awesome vape'
            },
            {
                id: 2,
                author: 'Bob',
                rating: 2,
                text: 'Worst liquid ever'
            },
            {
                id: 3,
                author: 'John',
                rating: 8,
                text: 'Good flavor. I really like it.'
            }
        ]
    },
    empty: {
        reviews: []
    }
};

export default ReviewList;
