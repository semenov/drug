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
    }
}
