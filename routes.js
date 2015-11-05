import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App/App';

export default {
    home: {
        path: '/',
        method: 'get',
        handler: () => {
            return 'Home';
        }
    },

    hello: {
        path: '/hello',
        method: 'get',
        handler: () => {
            return 'Hello!';
        }
    },
    app: {
        path: '/app',
        method: 'get',
        handler: () => {
            var app = new App();
            return ReactDOMServer.renderToString(app);
        }
    }
}
