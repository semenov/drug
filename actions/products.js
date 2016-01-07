import * as service from '../services/ProductsService';
import { createAction } from 'redux-actions';

export const setProducts = createAction('PRODUCTS_SET', service.list);
export const setCurrentProduct = createAction('CURRENT_PRODUCT_SET', service.get);
