import Types from '../configs/MutationTypes';

const searchStore = {
    state: {
        tmpSymbol: '',
    },
    mutations: {
        setTmpSymbol(state, newTmpSymbol){
            state.tmpSymbol = newTmpSymbol;
        },
        resetSearch(state){
            state.tmpSymbol = '';
        }
    },
    actions: {
        setTmpSymbol({commit}, evt){
            commit(Types.SET_SYMBOL, evt.target.value.toUpperCase());
        },
        resetSearch({commit}){
            commit(Types.RESET_SEARCH)
        }
    }
}

export default searchStore;