import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LineChart from "components/LineChart";
import DropdownExampleMultipleSelection from "components/DropdownMutiply";
import DropdownType from "components/Dropdown";
import DataPicker from "components/DataPicker";
import { TYPE_OPTIONS } from "constants/constans";
import { moment } from "moment";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const ChartRow = () => {
  const { selectTypeStore, selectDataStore } = useStores();

  const defaultOptions = TYPE_OPTIONS.find((e, i) => i < 1).value;

  useEffect(() => {
    selectTypeStore.handleChange(defaultOptions);
  });

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

  return (
    <Grid.Row columns={2}>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <LineChart
          dates={getDaysArray(selectDateStore.from, selectDateStore.to)}
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <p>Please, select type of info</p>
        <DropdownType
          type={TYPE_OPTIONS}
          select={selectTypeStore}
          onValueChange={handleValueChange}
          default={defaultOptions}
        />
        <p>Please, select countries</p>
        <DropdownExampleMultipleSelection />
        <p>Please, select data range</p>
        <DataPicker />
      </Grid.Column>
    </Grid.Row>
  );
};

export default observer(ChartRow);
