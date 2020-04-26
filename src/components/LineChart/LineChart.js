import React from "react";
import Chart from "react-google-charts";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";
import "./LineChart.scss";

const LineChart = (props) => {
  const { selectTypeStore, selectCountriesStore, fetchDataStore } = useStores();

  let result = [];

  if(Object.keys(fetchDataStore.dataOfCountry_allDay).length === props.data.length){
    result = props.dates.map(date=> {
      const res = [];
        res.push(date)
          props.data.forEach(code => {
            if(Object.keys(fetchDataStore.dataOfCountry_allDay[code]).length){
              res.push(fetchDataStore.dataOfCountry_allDay[code][date])
            }else{
              res.push(0)
            }
          }
        )
      return res
    })
  }

  return (
    <div className="line-chart">
      <Chart
        height={"300px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", ...selectCountriesStore.selectCountries],
          ...result
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
