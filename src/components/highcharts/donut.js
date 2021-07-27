import React, {Component} from 'react';
import Highcharts from 'highcharts';

class Donut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Gases',
                data: [
                    {
                        name: 'Argon',
                        y: 0.9,
                        color: '#3498db'
                    },
                    {
                        name: 'Nitrogen',
                        y: 78.1,
                        color: '#9b59b6'
                    },
                    {
                        name: 'Oxygen',
                        y: 20.9,
                        color: '#2ecc71'
                    },
                    {
                        name: 'Trace Gases',
                        y: 0.1,
                        color: '#f1c40f'
                    }
                ]
            }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
                type: 'pie',
                renderTo: 'atmospheric-composition'
            },
            title: {
                text: 'Earth\'s Atmospheric Composition'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        format: '{point.name}: {point.percentage:.1f} %'
                    },
                    innerSize: '70%'
                }
            },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }

    render() {
        return (
            <div id="atmospheric-composition">
            </div>
        );
    }
}

export default Donut;