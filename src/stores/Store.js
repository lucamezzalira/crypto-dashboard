import Vuex from 'vuex';
import Vue from 'vue';

import CurrencyStore from './CurrencyStore';
import CoinsStore from './CoinsStore';
import SearchStore from './SearchStore';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules:{
        crypto: CurrencyStore,
        coins: CoinsStore,
        search: SearchStore
    }
})