import polyfill from 'babel-polyfill';

import express from 'express';
import path from 'path';
import {handleRoute} from './router';

const server = express();

server.set('port', (process.env.PORT || 3000));
server.use(express.static(path.join(__dirname, 'public')));

server.get('*', async (req, res, next) => {
    try {
        console.log('req.path', req.path)
        let result = handleRoute(req.path);
        if (result) {
            let statusCode = 200;
            let html = result;
            res.status(statusCode).send('<!doctype html>\n' + html);
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
