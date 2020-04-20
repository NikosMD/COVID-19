import React from "react";
import Chart from "react-google-charts";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

import "./LineChart.scss";

const LineChart = () => {
  const { selectTypeStore, selectCountriesStore } = useStores();
  return (
    <div className="line-chart">
      <Chart
        height={"300px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", ...selectCountriesStore.selectCountries],
          [0, 0, 0, 0, 0],
          [1, 10, 5, 15, 10],
          [2, 23, 15, 22, 12],
          [3, 17, 9, 23, 14],
          [4, 18, 10, 12, 18],
          [5, 9, 5, 23, 90],
          [6, 11, 3, 11, 12],
          [7, 27, 19, 12, 33],
        ]}
        options={{
          hAxis: {
            title: "Day",
          },
          vAxis: {
            title: selectTypeStore.selectType,
          },
          series: {
            1: { curveType: "function" },
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
};

export default observer(LineChart);
