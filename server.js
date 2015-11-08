import polyfill from 'babel-polyfill';
import { install } from 'source-map-support';
install();


import express from 'express';
import path from 'path';
import {handleRoute} from './router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './components/Html/Html';

const server = express();

server.set('port', (process.env.PORT || 3000));
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'build')));

server.get('*', async (req, res, next) => {
    try {
        console.log('req.path', req.path)
        let result = handleRoute(req.path);
        if (result) {
            let html = ReactDOMServer.renderToStaticMarkup(<Html css='/style.css' body={result} />);

            res.send('<!doctype html>\n' + html);
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
});

server.listen(server.get('port'), () => {
    console.log('The server is running at http://localhost:' + server.get('port'));
});
