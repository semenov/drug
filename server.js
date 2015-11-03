import express from 'express';

const server = express();

server.set('port', (process.env.PORT || 3000));
server.use(express.static(path.join(__dirname, 'public')));

server.get('*', async (req, res, next) => {
    try {
        let statusCode = 200;
        let html = '';
        res.status(statusCode).send('<!doctype html>\n' + html);
    } catch (err) {
        next(err);
    }
});

server.listen(server.get('port'), () => {
    console.log('The server is running at http://localhost:' + server.get('port'));
});
