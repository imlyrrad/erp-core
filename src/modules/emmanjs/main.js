/* Import Routes from Router */

import routes from './router/routes';
import todo from './store/todo.store';

export default {
	routes,
	store: {
		todo
	}
};
