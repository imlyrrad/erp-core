import Vue from 'vue';
import Vuex from 'vuex';

import Core from './core/main';
import bootedApp from './modules/boot';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: Object.assign({ core: Core.store }, bootedApp.stores)
});
