import React from "react";
import Chart from "react-google-charts";
import "./Map.scss";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const Map = (props) => {
  const { selectTypeStore, fetchDataStore } = useStores();

  const allDataCountry = props.options.reduce((acc, cv) => {
    return { ...acc, [cv.text]: cv };
  }, {});

  const currentCountry = allDataCountry[selectTypeStore.selectCountry];
  const data = [["Country", "Cases", "Deaths"]];

  if (fetchDataStore.isLoaded) {
    fetchDataStore.dataOfCountry.Countries.forEach((Country, index) => {
      data.push([
        Country.CountryCode,
        Country.TotalConfirmed,
        Country.TotalDeaths,
      ]);
    });
  }

  return (
    <div className="map-chart">
      <Chart
        height={"300px"}
        chartType="GeoChart"
        data={data}
        options={{
          region: currentCountry ? currentCountry.key : "world",
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
export default observer(Map);
