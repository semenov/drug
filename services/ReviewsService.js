import callApi from '../helpers/callApi';

export default {
    list
};

export async function list(productId) {
    return callApi('reviews.list', {productId});
}
