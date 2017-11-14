<template>
    <div v-if="$store.state.crypto.symbol != ''">
        <h1>{{$store.state.crypto.currencyName}} ({{$store.state.crypto.symbol}})</h1>
        <line-chart :chart-data="$store.state.crypto.chartData"></line-chart>
        <table>
            <tr>
                <th>Date</th>
                <th>Open value</th>
                <th>Close value</th>
                <th>Highest value</th>
                <th>Lowest value</th>
            </tr>
            <tr v-for="data in $store.state.crypto.currencyData">
                <td>{{formatDate(data.day)}}</td>
                <td>{{formatValue(data.values['1a. open (USD)'])}}</td>
                <td>{{formatValue(data.values['4a. close (USD)'])}}</td>
                <td>{{formatValue(data.values['2a. high (USD)'])}}</td>
                <td>{{formatValue(data.values['3a. low (USD)'])}}</td>
            </tr>
        </table>
    </div>
</template>

<style src="../css/CryptoCurrency.css"></style>

<script>
    import moment from 'moment-es6';
    import { mapActions } from 'vuex';
    import Types from '../configs/MutationTypes';
    import LineChart from './LineChart.vue';
   
   export default {
        components: {
            LineChart
        },
        methods: {
            formatValue(value){
                return `$ ${Number(value).toFixed(2)}`;
            },
            formatDate(date){
                return moment(date).format("DD MMM YY")
            }
        }
    }
</script>

