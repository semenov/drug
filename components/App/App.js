import React from 'react';
import Link from '../Link/Link';
import styles from './App.css';
import ProductList from '../ProductList/ProductList';
import ProductPage from '../ProductPage/ProductPage';

export default function App(props) {
    const state = props.state;
    let content;

    if (state.pageType == 'products') {
        content = <ProductList products={state.products} />
    }

    if (state.pageType == 'product') {
        content = <ProductPage product={state.product} reviews={[]} />
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <Link className={styles.logoLink} route="products">Vape·Best</Link>
            </h1>
            {content}
        </div>
    );
}
