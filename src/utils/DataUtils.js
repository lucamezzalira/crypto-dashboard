import moment from 'moment-es6';

export const extractMonthData = (data, dates) => {
    return dates.map(date => {
        return {
            day: date,
            values: data[date]
        }
    });
}

export const getLastMonth = data => {
    const dates = Object.keys(data);
    return dates.filter((value, index) => {
        if(index < 30) return value
    })
}

export const prepareChartData = data => {
    const chartLabels = data.map(value => moment(value.day).format("DD MMM YY"));
    const chartData = [{
        label: 'open value',
        backgroundColor: 'rgba(45,77,86,.8)',
        data: data.map(value => value.values['1a. open (USD)'])
    },
    {
        label: 'close value',
        backgroundColor: 'rgba(52,89,100,.8)',
        data: data.map(value => value.values['4a. close (USD)'])
    },
    {
        label: 'high value',
        backgroundColor: 'rgba(71,121,131,.8)',
        data: data.map(value => value.values['2a. high (USD)'])
    },
    {
        label: 'low value',
        backgroundColor: 'rgba(105,151,131,.8)',
        data: data.map(value => value.values['3a. low (USD)'])
    }]

    return {
        labels: chartLabels,
        datasets: chartData
    }
}