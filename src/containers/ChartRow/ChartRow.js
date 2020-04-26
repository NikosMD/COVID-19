import React, { useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import LineChart from "components/LineChart";
import DropdownExampleMultipleSelection from "components/DropdownMutiply";
import DropdownType from "components/Dropdown";
import DataPicker from "components/DataPicker";
import { TYPE_OPTIONS } from "constants/constans";
import moment from "moment";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";
import "./ChartRow.scss";

const ChartRow = () => {
  const data = [];

  const { selectTypeStore, selectCountriesStore, fetchDataStore, selectDateStore } = useStores();

  const handleValueChange = (value) => {
    selectTypeStore.handleChange(value);
  };

  var getDaysArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(moment(dt).format("YYYY-MM-DD"));
    }
    return arr;
  };

  const onSendClick = () => {
    if (fetchDataStore.isLoaded) {
      selectCountriesStore.selectCountries.forEach(current=>{
        fetchDataStore.dataOfCountry.Countries.forEach(Country => {
            Country.Country === current && data.push(Country.CountryCode);
        })
      })
    }

    if(!!selectDateStore.from && !!selectDateStore.to){
      fetchDataStore.fetchData_allDay(
        {
          countrys: data, 
          status: selectTypeStore.selectType,
          from: moment(selectDateStore.from).format("YYYY-MM-DD"),
          to: moment(selectDateStore.to).format("YYYY-MM-DD")
        }
      );
    }
  }

  return (
    <Grid.Row columns={2}>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <LineChart
          data={data}
          dates={getDaysArray(selectDateStore.from, selectDateStore.to)}
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <p>Please, select type of info</p>
        <DropdownType
          type={TYPE_OPTIONS}
          select={selectTypeStore}
          onValueChange={handleValueChange}
          default={selectTypeStore.selectType}
        />
        <p>Please, select countries</p>
        <DropdownExampleMultipleSelection />
        <p>Please, select data range</p>
        <div className="buttonContainer">
          <DataPicker />
          <Button
            className="buttuonChartRow"
            content="Update Dates"
            onClick={onSendClick}
          />
        </div>
      </Grid.Column>
    </Grid.Row>
  );
};

export default observer(ChartRow);
