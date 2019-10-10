/* Boot your application */

import emmanjs from './emmanjs/main';
import jopexjs from './jopexjs/main';

let loadedApp = [emmanjs, jopexjs];

export default (function() {
	let routes = [],
		stores = {};
	loadedApp.forEach(app => {
        app.routes && routes.push(app.routes);
        app.store && Object.assign(app, loadedApp.store);
	});
	return { routes, stores };
})();
