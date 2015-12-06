import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App/App';
import reducers from './reducers';
import { setLists, setCurrentList } from './actions/lists';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger({
    stateTransformer: (state) => {
        return state.toJS();
    }
});

let createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default {
    home: {
        path: '/',
        method: 'get',
        handler: async () => {
            let store = createStoreWithMiddleware(reducers);
            let state = store.getState();
            return <App state={state} />;
        }
    },

    lists: {
        path: '/lists',
        method: 'get',
        handler: async () => {
            let store = createStoreWithMiddleware(reducers);
            let d = await store.dispatch(setLists());
            console.log({d});
            let state = store.getState();
            console.log('new state', state.toJS());
            return <App state={state} />;
        }
    },

    list: {
        path: '/lists/:id',
        method: 'get',
        handler: async () => {
            let store = createStoreWithMiddleware(reducers);
            store.dispatch(setCurrentList(1));
            let state = store.getState();
            return <App state={state} />;
        }
    },

    hello: {
        path: '/hello/:name',
        method: 'get',
        handler: async () => {
            return <div>Hello, bra!</div>;
        }
    }
}
