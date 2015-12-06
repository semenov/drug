import polyfill from 'babel-polyfill';
import { install } from 'source-map-support';
install();

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import Root from './components/Root/Root';
import serverMiddleware from './core/serverMiddleware';
import config from './config/config';
import router from './router';
import http from 'http';
import api from './api';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(morgan('dev'));
app.use('/api', api);

app.get('*', serverMiddleware(router, Root));

var server = http.createServer(app);
server.listen(config.server.port, '0.0.0.0', null, () => {
    console.log('The server is running at http://localhost:' + config.server.port);
});
