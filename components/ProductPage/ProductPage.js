import React from 'react';
import style from './ProductPage.css';
import repeat from 'lodash/string/repeat';
import Product from '../Product/Product';
import ReviewList from '../ReviewList/ReviewList';
import ReviewForm from '../ReviewForm/ReviewForm';

function ProductPage(props) {
    return (
        <div className={style.container}>
            <Product {...props.product} />
            <ReviewList reviews={props.reviews} />
            <ReviewForm />
        </div>
    );
}

ProductPage.propTypes = {
    product: React.PropTypes.object,
    reviews: React.PropTypes.array
};

ProductPage.propDemos = {
    default: {
        product: Product.propDemos.default,
        reviews: ReviewList.propDemos.default.reviews
    },
    noReviews: {
        product: Product.propDemos.default,
        reviews: []
    }
};

export default ProductPage;
