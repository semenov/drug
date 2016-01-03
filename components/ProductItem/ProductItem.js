import React from 'react';
import style from './ProductItem.css';
import repeat from 'lodash/string/repeat';
import Rating from '../Rating/Rating';

function ProductItem(props) {
    return (
        <div className={style.container} key={props.id}>
            <img className={style.image} src={props.image} />
            <div className={style.title}>
                <span className={style.brand}>{props.brand}</span>
                &nbsp;
                <span className={style.name}>{props.name}</span>
            </div>
            <div className={style.rating}>
                <Rating rating={props.rating} />
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    id: React.PropTypes.number,
    image: React.PropTypes.string,
    brand: React.PropTypes.string,
    name: React.PropTypes.string,
    rating: React.PropTypes.number
};

ProductItem.propDemos = {
    default: {
        id: 1,
        image: '/milkman.jpg',
        brand: 'Milkman',
        name: 'Churrios',
        rating: 8
    },
    noRating: {
        id: 1,
        image: '/milkman.jpg',
        brand: 'Milkman',
        name: 'Churrios',
        rating: 0
    },
    noImage: {
        id: 1,
        image: null,
        brand: 'Milkman',
        name: 'Churrios',
        rating: 8
    }
};

export default ProductItem;
