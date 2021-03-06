import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsFunnel from "highcharts/modules/funnel";
import HighchartsExporting from "highcharts/modules/exporting";

HighchartsFunnel(Highcharts);
HighchartsExporting(Highcharts);

const options = {
    chart: {
        type: 'funnel'
    },
    credits: {
        text: "alecvinent.com",
        href:"https://alecvinent.com"
    },
    exporting: {
        enabled: false
    },
    title: {
        text: 'Sales funnel'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                softConnector: true
            },
            center: ['40%', '50%'],
            neckWidth: '30%',
            neckHeight: '25%',
            width: '80%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Unique users',
        data: [
            ['Website visits', 15654],
            ['Downloads', 4064],
            ['Requested price list', 1987],
            ['Invoice sent', 976],
            ['Finalized', 846]
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            inside: true
                        },
                        center: ['50%', '50%'],
                        width: '100%'
                    }
                }
            }
        }]
    }
};

const Funnel = () => (
    <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
);

export default Funnel