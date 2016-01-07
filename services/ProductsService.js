import callApi from '../helpers/callApi';

export default {
    list,
    get
};

export async function list() {
    return callApi('products.list');
}

export async function get(id: string) {
    return callApi('products.get', {id});
}
