import { handleActions } from 'redux-actions';

let initialState = {
    moto: 'Yo, bro!'
};

export default handleActions({
    'PRODUCTS_SET': setProducts,
    'CURRENT_PRODUCT_SET': setCurrentProduct
}, initialState);

export function setProducts(state, action) {
    return {
        pageType: 'products',
        products: action.payload,
        ...state};
}

export function setCurrentProduct(state, action) {
    return {
        pageType: 'product',
        product: action.payload,
        ...state
    };
}
