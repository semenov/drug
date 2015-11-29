import polyfill from 'babel-polyfill';
import { install } from 'source-map-support';
install();

import express from 'express';
import path from 'path';
import Root from './components/Root/Root';
import serverMiddleware from './core/serverMiddleware';
import config from './config/config';
import router from './router';

const server = express();

server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'build')));

server.get('*', serverMiddleware(router, Root));

server.listen(config.server.port, () => {
    console.log('The server is running at http://localhost:' + config.server.port);
});
