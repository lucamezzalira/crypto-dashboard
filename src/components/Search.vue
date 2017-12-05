<template>
    <div id="formContainer">
        <form>
            <label>Search by symbol</label>
            <input @change="setTmpSymbol" placeholder="e.g. BTC or ETH" type="text" :value="$store.state.search.tmpSymbol"></input>
        </form>
        <button @click="searchSymbol">GET CHART</button>
    </div>
</template>

<style src="../css/Search.css"></style>

<script>
    import { mapActions } from 'vuex';
    import Types from '../configs/MutationTypes';

    export default {
        methods: mapActions([
            Types.SET_SYMBOL,
            Types.SEARCH_SYMBOL
        ])
    }
</script>
