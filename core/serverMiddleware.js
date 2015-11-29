import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function middlewareConstructor(router, rootComponent) {
    function serverMiddleware(req, res, next) {
        try {
            console.log('req.path', req.path)
            let route = router.getRoute(req.path);
            if (route) {
                let result = route.config.handler();
                let renderedResult = ReactDOMServer.renderToString(result);
                let document = React.createElement(rootComponent, { body: renderedResult });
                let html = ReactDOMServer.renderToStaticMarkup(document);

                res.send('<!doctype html>\n' + html);
            } else {
                next();
            }
        } catch (err) {
            next(err);
        }
    }

    return serverMiddleware;
}
