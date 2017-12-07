<template>
    <div id="coinDataContianer" v-if="$store.state.crypto.symbol != ''">
        <h1>{{$store.state.crypto.currencyName}}</h1>
        <line-chart :chart-data="$store.state.crypto.chartData"></line-chart>
        <table>
            <tr>
                <th>Date</th>
                <th>Open value</th>
                <th>Close value</th>
                <th>Highest value</th>
                <th>Lowest value</th>
            </tr>
            <tr v-for="data in reversedData">
                <td>{{formatDate(data.time)}}</td>
                <td>{{formatValue(data.open)}}</td>
                <td>{{formatValue(data.close)}}</td>
                <td>{{formatValue(data.high)}}</td>
                <td>{{formatValue(data.low)}}</td>
            </tr>
        </table>
    </div>
</template>

<style src="../css/CryptoCurrency.css"></style>

<script>
    import moment from 'moment-es6';
    import LineChart from './LineChart.vue';
   
   export default {
        components: {
            LineChart
        },
        computed: {
            reversedData(){
                return this.$store.state.crypto.currencyData.reverse()
            }
        },
        methods: {
            formatValue(value){
                return `$ ${parseFloat(Number(value).toFixed(4))}`;
            },
            formatDate(date){
                return moment.unix(date).format("DD MMM YY")
            }
        }
    }
</script>

//TODO: add icon to selected coin
//TODO: add candlestick chart (financial chart)
//TODO: add volumes to the table