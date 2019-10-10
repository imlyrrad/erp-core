import Vue from 'vue';
import VueRouter from 'vue-router';

import core from './core/main';
import bootedApp from './modules/boot';

Vue.use(VueRouter);


export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [core.routes, ...bootedApp.routes]
});
