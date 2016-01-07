import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App/App';
import reducers from './reducers';
import { setProducts, setCurrentProduct } from './actions/products';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import LivePage from './core/live/containers/LivePage/LivePage';
import components from './components';

//const logger = createLogger({
//    stateTransformer: (state) => {
//        return state.toJS();
//    }
//});

let createStoreWithMiddleware = applyMiddleware(promise)(createStore);

async function makeState(action) {
    let store = createStoreWithMiddleware(reducers);
    await store.dispatch(action);
    return store.getState();
}

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

    products: {
        path: '/products',
        method: 'get',
        handler: async () => {
            const state = await makeState(setProducts());
            console.log('new state', state);
            return <App state={state} />;
        }
    },

    product: {
        path: '/products/:id',
        method: 'get',
        handler: async (req) => {
            const id = req.params.id;
            let state = await makeState(setCurrentProduct(id));
            console.log('new state', state);
            return <App state={state} />;
        }
    },
    //lists: {
    //    path: '/lists',
    //    method: 'get',
    //    handler: async () => {
    //        let store = createStoreWithMiddleware(reducers);
    //        let d = await store.dispatch(setLists());
    //        console.log({d});
    //        let state = store.getState();
    //        console.log('new state', state.toJS());
    //        return <App state={state} />;
    //    }
    //},
    //
    //list: {
    //    path: '/lists/:id',
    //    method: 'get',
    //    handler: async () => {
    //        let store = createStoreWithMiddleware(reducers);
    //        store.dispatch(setCurrentList(1));
    //        let state = store.getState();
    //        return <App state={state} />;
    //    }
    //},

    live: {
        path: '/live/:component?/:demo?',
        method: 'get',
        handler: async (req) => {
            let componentName = req.params.component;
            let demoName = req.params.demo;
            return <LivePage components={components} componentName={componentName} demoName={demoName} />;
        }
    }
}
