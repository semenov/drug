import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Immutable from 'immutable';
import { createStore } from 'redux';
import App from './components/App/App';

let initialState = Immutable.fromJS({
    moto: 'Yo, bro!'
});

let updateMoto = text => ({
    type: 'UPDATE_MOTO',
    text
});

function reducer(state = initialState, action) {
    if (action.type == 'UPDATE_MOTO') {
        return state.set('moto', action.text);
    }

    return state;
}

export default {
    home: {
        path: '/',
        method: 'get',
        handler: () => {
            let store = createStore(reducer);
            store.dispatch(updateMoto('Hello, fellow!'));
            let state = store.getState();
            return <App state={state} />;
        }
    },

    hello: {
        path: '/hello/:name',
        method: 'get',
        handler: () => {
            return <div>Hello, bra!</div>;
        }
    }
}
