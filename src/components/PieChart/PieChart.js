import React from "react";
import Chart from "react-google-charts";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";
import "./PieChart.scss";

const PieChart = () => {
  const { selectCountriesStore, fetchDataStore } = useStores();

  const data_option = fetchDataStore.dataOfRaion.data.simpleChartDistrictList.reduce(
    (acc, cv) => {
      return { ...acc, [cv.district]: [cv.district, cv.nr_cases] };
    },
    {}
  );

  const selectData = selectCountriesStore.selectDistrictsMoldova.map(
    (e) => data_option[e]
  );

  return (
    <Chart
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[["Raion", "Ill"], ...selectData]}
      options={{
        legend: "none",
        pieSliceText: "label",
        title: "Swiss Language Use (100 degree rotation)",
        pieStartAngle: 100,
      }}
      rootProps={{ "data-testid": "4" }}
    />
  );
};

export default observer(PieChart);
