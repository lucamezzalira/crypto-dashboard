<template>
    <div id="coinDataContianer" v-if="$store.state.crypto.currencyName != ''">
       <div>
            <img :src="$store.state.crypto.logo" width="50" height="50"/>
            <h1>{{$store.state.crypto.currencyName}}</h1>
       </div>
       <div class="echarts">
            <IEcharts ref="chart" :option="chartsData"></IEcharts>
       </div>
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
            <tr v-for="data in reversedData">
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

<style src="../css/CryptoCurrency.css"></style>

<script>
    import moment from 'moment-es6';
    import numeral from 'numeral'

    import IEcharts from 'vue-echarts-v3/src/lite.js';
    import 'echarts/lib/chart/candlestick';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/tooltip';

   export default {
        components: {
            IEcharts
        },
        computed: {
            reversedData(){
                return this.$store.state.crypto.currencyData.reverse()
            },
            chartsData(){
                return {
                    animation: true,
                    animationDuration: 1500,
                    tooltip:{
                        transitionDuration: .5,
                        show: true
                    },
                    xAxis: {
                        data: this.$store.state.crypto.chartData.labels,
                    },
                    yAxis: {
                        scale: true
                    },
                    series: {
                        type: 'candlestick',
                        data: this.$store.state.crypto.chartData.data,
                        itemStyle: {
                            normal: {
                                color0: '#ef232a',
                                color: '#14b143',
                                borderColor0: '#ef232a',
                                borderColor: '#14b143'
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: 'black'
                            }
                        }
                    }
                }  
            }
        },
        methods: {
            formatValue(value){
                const num = parseFloat(Number(value).toFixed(4));
                return numeral(num).format('0,0.00');
            },
            formatDate(date){
                return moment.unix(date).format('DD MMM YY')
            },
            resizeChart(){
                if(this.$refs.chart)
                    this.$refs.chart.resize();
            }
        },
        mounted() {
            window.addEventListener('resize', this.resizeChart)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.resizeChart)
        },
    }
</script>

//TODO: extract chart code into component
//TODO: render small values (more than 4 zeros)