<template>
    <div>
        <Search/>
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
    export default {
        components:{
            Search,
            CryptoCurrency
        }
    }
</script>
