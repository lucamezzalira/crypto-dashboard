import moment from 'moment-es6';

export const prepareChartData = data => {
    const chartLabels = data.map(value => moment.unix(value.time).format("DD MMM YY"));
    const chartData = [{
        label: 'open value',
        backgroundColor: 'rgba(45,77,86,.8)',
        data: data.map(value => value.open)
    },
    {
        label: 'close value',
        backgroundColor: 'rgba(52,89,100,.8)',
        data: data.map(value => value.close)
    },
    {
        label: 'high value',
        backgroundColor: 'rgba(71,121,131,.8)',
        data: data.map(value => value.high)
    },
    {
        label: 'low value',
        backgroundColor: 'rgba(105,151,131,.8)',
        data: data.map(value => value.low)
    }]

    return {
        labels: chartLabels,
        datasets: chartData
    }
}