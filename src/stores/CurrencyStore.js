import moment from 'moment-es6';
import Types from '../configs/MutationTypes';
import { prepareChartData } from '../utils/DataUtils';

const currencyStore = {
    state: {
        logo: '',
        currencyName: '',
        currencyData: [],
        chartData: [],
        allCoins: []
    },
    getters:{
        tableCurrencyData(state){
            return state.currencyData.reverse();
        }
    },
    mutations:{
        changeSymbol(state, currencyData){
            const {logo, currency, data} = currencyData;
    
            state.currencyName = currency;
            state.currencyData = data;
            state.logo = logo;
            state.chartData = prepareChartData(data)
        },
        saveAllCoinsData(state, coinsList){
            state.allCoins = coinsList;
        }
    },
    actions: {
        searchSymbol({dispatch, rootState}){
            dispatch(Types.LOAD_COIN_DATA, rootState.search.tmpSymbol)
        },
        changeSymbol({dispatch}, evt){
            dispatch(Types.LOAD_COIN_DATA, evt.target.value)
            dispatch(Types.RESET_SEARCH)
        },
        loadCoinData({commit, state}, coinSymbol){
            const URL = `https://min-api.cryptocompare.com/data/histoday?&tsym=USD&limit=30&aggregate=1&toTs=${moment.now()}&fsym=${coinSymbol}`;
            
            fetch(URL)
                    .then(response => response.json())
                    .then(data =>
                        commit(Types.CHANGE_SYMBOL, {
                            logo: `https://www.cryptocompare.com/${state.allCoins[coinSymbol].ImageUrl}`,
                            currency: state.allCoins[coinSymbol].FullName,
                            data: data.Data
                        })
                    ).catch(err => console.error(err))
        },
        loadCoinsData({commit}){
            const URL = "https://www.cryptocompare.com/api/data/coinlist"

            fetch(URL)
                    .then(response => response.json())
                    .then(list => commit(Types.ALL_COINS, list.Data))
                    .catch(err => console.error(err));

        }
    }
}

export default currencyStore;