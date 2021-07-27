import React, {Component} from 'react';
import Donut from "./donut";
import Spline from "./spline";
import Line from "./line";
import Area from "./area";
import Pie from "./pie";
import Organizationchart from "./organizationchart";
import Funnel from "./funnel";
import CombinedChart from "./combined";
import Gantt from "./gantt";
import "./style.css"

class HighchartGraph extends Component {
    render() {
        return (
            <>
                <h1>Highchart Graphs</h1>
                <p><a href="https://api.highcharts.com/highcharts" target="_blank" rel="noreferrer">Docs</a></p>
                <p><a href="https://www.highcharts.com/demo" target="_blank" rel="noreferrer">Demos</a></p>
                <button>aaa</button>
                <hr/>
                <Donut/>
                <Spline/>
                <Line/>
                <Area/>
                <Pie/>
                <Organizationchart/>
                <Funnel/>
                <CombinedChart/>
                <hr/>
                <Gantt/>
            </>
        );
    }
}

export default HighchartGraph;