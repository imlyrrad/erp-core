/* Import Routes from Router */

import routes from './router/routes';
import tasks from './store/tasks.store';

export default {
	routes,
	store: {
		tasks
	}
};
