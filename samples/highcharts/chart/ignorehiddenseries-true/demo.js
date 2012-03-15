var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        //ignoreHiddenSeries: true,
        type: 'line'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {   
    },
    plotOptions: {
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]        
    }, {
        data: [148.5, 116.4, 104.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]        
    }]
});