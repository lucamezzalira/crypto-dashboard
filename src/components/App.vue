<template>
    <div>
        <div>
            <search/>
            <coins-list/>
        </div>
        <crypto-currency/>
    </div>
</template>
<style>
    body{
        font-family: "Roboto", helvetica, arial, sans-serif;
        text-rendering: optimizeLegibility;
    }
</style>

<script>
    import Search from './Search.vue';
    import CryptoCurrency from './CryptoCurrency.vue';
    import CoinsList from './CoinsList.vue';
    export default {
        components:{
            Search,
            CoinsList,
            CryptoCurrency
        }
    }
</script>
