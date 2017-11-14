<template>
    <div id="formContainer">
        <form>
            <label>Crypto currency by symbol</label>
            <input @change="setTmpSymbol" placeholder="e.g. BTC or ETH" type="text"></input>
        </form>
        <button @click="changeSymbol">GET CHART</button>
    </div>
</template>

<style src="../css/Search.css"></style>

<script>
    import { mapActions } from 'vuex';
    import Types from '../configs/MutationTypes';

    export default {
        methods: mapActions([
            Types.SET_SYMBOL,
            Types.CHANGE_SYMBOL
        ])
    }
</script>
