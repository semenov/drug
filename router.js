import Router from 'routr';
import routes from './routes';

let router = new Router(routes);

//export function handleRoute(path) {
//    var route = router.getRoute(path);
//    if (route) {
//        // this will output:
//        //   - "view_user" for route.name
//        //   - "/user/garfield" for route.url
//        //   - {id: "garfield"} for route.params
//        //   - {path: "/user/:id", method: "get", foo: { bar: "baz"}} for route.config
//
//
//        var result = route.config.handler();
//        return result;
//    }
//
//}

export default router;






