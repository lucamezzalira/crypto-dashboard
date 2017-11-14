import Vuex from 'vuex';
import Vue from 'vue'

import CurrencyStore from './CurrencyStore';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        crypto: CurrencyStore
    }
})