import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App/App';

export default {
    home: {
        path: '/',
        method: 'get',
        handler: () => {
            let state = {};
            return <App state={state} />;
        }
    },

    hello: {
        path: '/hello/:name',
        method: 'get',
        handler: () => {
            return <div>Hello!</div>;
        }
    }
}
