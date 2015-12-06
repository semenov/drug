import fetch from 'isomorphic-fetch';

export default {
    getLists,
    getListById
};

async function callApi(url) {
    let response = await fetch('/api/' + url);
    let result = await response.json();
    console.log('api result', result);
    return result.data;
}

export async function getLists() {
    return callApi('lists');
}

export async function getListById(id: string) {
    return callApi('lists/' + id);
}
