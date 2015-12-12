import { createHistory } from 'history';
import ReactDOM from 'react-dom';
import router from './router';

let history = createHistory();

history.listen(async location => {
    console.log(location.pathname);
    const appContainer = document.getElementById('app');

    let route = router.getRoute(location.pathname);
    if (route) {
        let result = await route.config.handler(route);
        ReactDOM.render(result, appContainer, () => {
            console.log('App rendered');
        });
    }
});

export default history;
