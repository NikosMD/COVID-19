import React from 'react';
import Chart from "react-google-charts";
import './LineChart.scss'


const LineChart = () => (
    <div className="line-chart">
        <Chart
            height={'300px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['x', 'Evgen', 'Sergiu', 'Vlad'],
                [0, 0, 0, 0],
                [1, 10, 5, 15],
                [2, 23, 15, 22],
                [3, 17, 9, 23],
                [4, 18, 10, 12],
                [5, 9, 5, 23],
                [6, 11, 3, 11],
                [7, 27, 19, 12],
            ]}
            options={{
                hAxis: {
                title: 'Day',
                },
                vAxis: {
                title: 'Deaths',
                },
                series: {
                1: { curveType: 'function' },
                },
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    </div>
)
export default LineChart