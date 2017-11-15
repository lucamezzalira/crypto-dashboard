import Types from '../configs/MutationTypes';

const searchStore = {
    state: {
        tmpSymbol: '',
    },
    mutations: {
        setTmpSymbol(state, newTmpSymbol){
            state.tmpSymbol = newTmpSymbol;
        }
    },
    actions: {
        setTmpSymbol({commit}, evt){
            commit(Types.SET_SYMBOL, evt.target.value);
        }
    }
}

export default searchStore;