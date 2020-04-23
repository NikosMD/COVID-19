import React from "react";
import Chart from "react-google-charts";
import "./Map.scss";
import { useStores } from "Hooks/useHooks";

const Map = (props) => {
  const { selectCountryStore } = useStores();
  console.log("vasea", selectCountryStore.selectCountry);
  return (
    <div className="map-chart">
      <Chart
        height={"300px"}
        chartType="GeoChart"
        data={[
          ["Country", "Cases", "Deaths"],
          ["Germany", 200, 100],
          ["United States", 300, 200],
          ["Brazil", 400, 300],
          ["Canada", 500, 600],
          ["France", 600, 10000],
          ["RU", 700, 500],
        ]}
        options={{
          region: props.options ? props.options.key : "world",
          colorAxis: { colors: ["red"] },
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};
export default Map;
