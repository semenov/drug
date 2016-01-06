import express from 'express';
import methods from './methods';

const api = express();

function parseMethodPath(methodPath: string): Array<string> {
    return methodPath.split('.');
}

async function callMethod(methods: Object, methodPath: string, params: Object) {
    const parsedMethodPath = parseMethodPath(methodPath);
    let object = methods;
    parsedMethodPath.forEach((name) => {
        object = object[name];
        if (!object) {
            throw new Error('Method not found');
        }
    });

    return await object.call(null, params);
}

async function getHttpResponse(methods: Object, methodPath: string, params: Object) {
    try {
        const result = await callMethod(methods, methodPath, params);
        return {
            status: 'ok',
            data: result
        };
    } catch (e) {
        console.log({e});
        return {
            status: 'error',
            message: e.message
        };
    }
}

api.get('*', (req, res) => {
    const method = req.path.slice(1);
    const params = req.body;

    getHttpResponse(methods, method, params).then(response => {
        res.json(response);
    });

});


export default api;
