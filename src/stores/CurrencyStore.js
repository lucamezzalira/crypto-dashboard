import moment from 'moment-es6';
import Types from '../configs/MutationTypes';
import { prepareChartData } from '../utils/DataUtils';

const currencyStore = {
    state: {
        symbol: '',
        currencyName: '',
        currencyData: [],
        chartData: [],
        allCoins: []
    },
    mutations:{
        changeSymbol(state, currencyData){
            const {currencyCode, currency, data} = currencyData;
    
            state.currencyName = currency;
            state.currencyData = data;
            state.symbol = currencyCode;
            state.chartData = prepareChartData(data)
        },
        saveAllCoinsData(state, coinsList){
            state.allCoins = Object.values(coinsList);
            state.allCoins.unshift({
                FullName: '',
                Symbol: ''
            })
        }
    },
    actions: {
        searchSymbol({dispatch, rootState}){
            dispatch(Types.LOAD_COIN_DATA, rootState.search.tmpSymbol)
        // -->    dispatch(Types.RESET_VALUE)
        },
        changeSymbol({dispatch}, evt){
            dispatch(Types.LOAD_COIN_DATA, evt.target.value)
            dispatch(Types.RESET_SEARCH)
        },
        loadCoinData({commit}, coinSymbol){
            const URL = `https://min-api.cryptocompare.com/data/histoday?&tsym=USD&limit=30&aggregate=1&toTs=${moment.now()}&fsym=${coinSymbol}`;
            
            fetch(URL)
                .then(response => response.json())
                .then(data =>
                    commit(Types.CHANGE_SYMBOL, {
                        currencyCode: coinSymbol,
                        currency: "",
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

//TODO: extract dropdown logic for handling the reset
//TODO: set correct coin name
//TODO: better CSS position on search and coins list
//TODO: review code