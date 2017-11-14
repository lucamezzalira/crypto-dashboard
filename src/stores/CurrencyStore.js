import Types from '../configs/MutationTypes';
import { prepareChartData, getLastMonth, extractMonthData } from '../utils/DataUtils';

const URL = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&market=USD&apikey=G6ZJR4B7HGVCEWKF&symbol=`

const store = {
    state: {
        currencyName: '',
        symbol: '',
        tmpSymbol: '',
        currencyData: [],
        chartData: {}
    },
    mutations:{
        setTmpSymbol(state, newTmpSymbol){
            state.tmpSymbol = newTmpSymbol;
        },
        changeSymbol(state, currencyData){
            const {currencyCode, currency, data} = currencyData;
            
            state.currencyName = currency;
            state.currencyData = data;
            state.symbol = currencyCode;
            state.chartData = prepareChartData(data)
        }
    },
    actions: {
        setTmpSymbol({commit}, evt){
            commit(Types.SET_SYMBOL, evt.target.value);
        },
        changeSymbol({commit, state}){
            fetch(URL + state.tmpSymbol)
            .then(response => response.json())
            .then(data => {
                const currencyCode = data['Meta Data']['2. Digital Currency Code'];
                const currencyName = data['Meta Data']['3. Digital Currency Name'];
                const dailyData = data["Time Series (Digital Currency Daily)"];
                const lastMonthDates = getLastMonth(dailyData);
                const currencyMonthData = extractMonthData(dailyData, lastMonthDates);
                commit(Types.CHANGE_SYMBOL, {
                    currencyCode: currencyCode,
                    currency: currencyName,
                    data: currencyMonthData
                })
            }).catch(err => alert(err))
        }
    }
}

export default store;