import React from 'react';
import style from './Product.css';
import repeat from 'lodash/string/repeat';
import Rating from '../Rating/Rating';

function Product(props) {
    return (
        <div className={style.container} key={props.id}>
            <div className={style.additional}>
                <img className={style.image} src={props.image} />
            </div>
            <div className={style.info}>
                <div className={style.title}>
                    <span className={style.brand}>{props.brand}</span>
                    &nbsp;
                    <span className={style.name}>{props.name}</span>
                </div>
                <div className={style.rating}>
                    <Rating rating={props.rating} />
                </div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}

Product.propTypes = {
    id: React.PropTypes.number,
    image: React.PropTypes.string,
    brand: React.PropTypes.string,
    name: React.PropTypes.string,
    rating: React.PropTypes.number,
    description: React.PropTypes.string
};

Product.propDemos = {
    default: {
        id: 1,
        image: '/milkman.jpg',
        brand: 'Milkman',
        name: 'Churrios',
        rating: 8,
        description: `
            The decadent, warm, fluffy churro flavour in Churrios topped with cinnamon sugar and
            coupled with creamy fresh milk delivers the vaping perfection we've come to expect from The Milkman.
            It's another tantalisingly complex vape that bridges the gap between breakfast cereal flavours and
            dessert flavours with unbelievable expertise. This is definitely a flavour you don't want to miss.
        `
    },
    noRating: {
        id: 1,
        image: '/milkman.jpg',
        brand: 'Milkman',
        name: 'Churrios',
        rating: 0,
        description: `
            The decadent, warm, fluffy churro flavour in Churrios topped with cinnamon sugar and
            coupled with creamy fresh milk delivers the vaping perfection we've come to expect from The Milkman.
            It's another tantalisingly complex vape that bridges the gap between breakfast cereal flavours and
            dessert flavours with unbelievable expertise. This is definitely a flavour you don't want to miss.
        `
    },
    noImage: {
        id: 1,
        image: null,
        brand: 'Milkman',
        name: 'Churrios',
        rating: 8,
        description: `
            The decadent, warm, fluffy churro flavour in Churrios topped with cinnamon sugar and
            coupled with creamy fresh milk delivers the vaping perfection we've come to expect from The Milkman.
            It's another tantalisingly complex vape that bridges the gap between breakfast cereal flavours and
            dessert flavours with unbelievable expertise. This is definitely a flavour you don't want to miss.
        `
    },
    noDescription: {
        id: 1,
        image: '/milkman.jpg',
        brand: 'Milkman',
        name: 'Churrios',
        rating: 8,
        description: ''
    }
};

export default Product;
