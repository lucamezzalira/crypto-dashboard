<template>
        <div id="listContainer">
            or from the list: 
            <select @change="changeSymbol">
                <option v-for="coin in $store.state.crypto.allCoins" :value="coin.Symbol">{{coin.FullName}}</option>
            </select>
        </div>
        
</template>

<style src="../css/CoinsList.css"></style>

<script>
    import { mapActions } from 'vuex';
    import Types from '../configs/MutationTypes';

    export default {
        methods: mapActions([
            Types.CHANGE_SYMBOL
        ]),
        mounted(){
            this.$store.dispatch(Types.LOAD_COINS_DATA);
        }
    }
</script>

