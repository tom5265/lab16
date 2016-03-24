import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import PostListViewControl from '../viewcontrols/postlistviewcontrol/postlistviewcontrol.vc';
import SinglePostViewControl from '../viewcontrols/singlepostviewcontrol/singlepostviewcontrol.vc';
import ComposePostViewControl from '../viewcontrols/composepostviewcontrol/composepostviewcontrol.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '/', view: HomeViewControl },
            { pattern: '/posts', view: PostListViewControl },
            { pattern: '/posts/:id', view: SinglePostViewControl },
            { pattern: '/compose', view: ComposePostViewControl }     
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
