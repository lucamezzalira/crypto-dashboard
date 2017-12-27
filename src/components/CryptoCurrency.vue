<template>
    <div id="coinDataContianer" v-if="$store.state.crypto.currencyName != ''">
       <div>
            <img :src="$store.state.crypto.logo" width="50" height="50"/>
            <h1>{{$store.state.crypto.currencyName}}</h1>
       </div>
       <candlestick 
            :labels="$store.state.crypto.chartData.labels" 
            :currency-history="$store.state.crypto.chartData.data"/>
        <table>
            <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Close</th>
                <th>Highest</th>
                <th>Lowest</th>
                <th>Volume from</th>
                <th>Volume to</th>
            </tr>
            <tr v-for="data in reversedData" :key="data.time">
                <td>{{formatDate(data.time)}}</td>
                <td>$ {{formatValue(data.open)}}</td>
                <td>$ {{formatValue(data.close)}}</td>
                <td>$ {{formatValue(data.high)}}</td>
                <td>$ {{formatValue(data.low)}}</td>
                <td>{{formatValue(data.volumefrom)}}</td>
                <td>{{formatValue(data.volumeto)}}</td>
            </tr>
        </table>
    </div>
</template>

<style src="../css/CryptoCurrency.css"/>

<script>
    import moment from 'moment-es6';
    import numeral from 'numeral';
    import Candlestick from './CandlestickChart.vue';

   export default {
        components: {
           Candlestick
        },
        computed: {
            reversedData(){
                return this.$store.state.crypto.currencyData.reverse()
            }
        },
        methods: {
            formatValue(value){
                const num = parseFloat(Number(value).toFixed(4));
                return numeral(num).format('0,0.00');
            },
            formatDate(date){
                return moment.unix(date).format('DD MMM YY')
            }
        }
    }
</script>