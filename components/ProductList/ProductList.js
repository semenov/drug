import React from 'react';
import style from './ProductList.css';
import repeat from 'lodash/string/repeat';
import ProductItem from '../ProductItem/ProductItem';
import range from 'lodash/utility/range';

function ProductList(props) {
    let products;
    let count;

    if (props.products.length > 0) {
        products = props.products.map(product => {
            return <ProductItem {...product} />;
        });
        count = props.products.length;
    } else {
        products = <div>Список пуст.</div>
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Продукты<sup className={style.count}>{count}</sup></div>
            <div className={style.products}>
                {products}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: React.PropTypes.array
};

ProductList.propDemos = {
    default: {
        products: [
            {
                id: 1,
                image: '/milkman.jpg',
                brand: 'Milkman',
                name: 'Churrios',
                rating: 8
            },
            {
                id: 2,
                image: '/cuttwood.jpg',
                brand: 'Cuttwood',
                name: 'Unicorn Milk',
                rating: 9
            },
            {
                id: 3,
                image: '/milkman.jpg',
                brand: 'Milkman',
                name: 'Churrios',
                rating: 10
            }
        ]
    },
    empty: {
        products: []
    },
    many: {
        products: range(17).map(i => ({
            id: i,
            image: '/milkman.jpg',
            brand: 'Milkman',
            name: `Churrios ${i}`,
            rating: 8
        }))
    }
};

export default ProductList;
