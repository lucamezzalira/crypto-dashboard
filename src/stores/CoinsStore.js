import Types from '../configs/MutationTypes';

const coinsStore = {
    state:{
        allCoins: []
    },
    mutations:{
        saveAllCoinsData(state, coinsList){
            state.allCoins = coinsList;
        }
    },
    actions:{
        changeSymbol({dispatch, state}, coinSymbol){
            dispatch(Types.GET_COIN_DATA, coinSymbol).then(coin => {
                const selectedCoin = {
                    id: coin.Name,
                    name: coin.FullName,
                    imageUrl: coin.ImageUrl
                }
                dispatch(Types.LOAD_COIN_DATA, selectedCoin)
            })
            dispatch(Types.RESET_SEARCH)
        },
        loadCoinsData({commit}){
            const URL = "https://www.cryptocompare.com/api/data/coinlist";

            fetch(URL)
                    .then(response => response.json())
                    .then(list => commit(Types.ALL_COINS, list.Data))
                    .catch(err => console.error(err));

        },
        getSelectedCoin({state}, id){
            return new Promise((resolve,reject) => resolve(state.allCoins[id]))
        }
    }
}

export default coinsStore;