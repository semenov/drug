import fetch from 'isomorphic-fetch';

async function callApi(method, params = {}) {
    let response = await fetch('http://localhost:3000/api/' + method, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    let result = await response.json();
    console.log('api result', result);
    return result.data;
}

export default callApi;
