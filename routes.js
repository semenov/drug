import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App/App';

export default {
    home: {
        path: '/',
        method: 'get',
        handler: () => {
            return <div>Home</div>;
        }
    },

    hello: {
        path: '/hello',
        method: 'get',
        handler: () => {
            return <div>Hello!</div>;
        }
    },
    app: {
        path: '/app',
        method: 'get',
        handler: () => {
            return <App />;
        }
    }
}
