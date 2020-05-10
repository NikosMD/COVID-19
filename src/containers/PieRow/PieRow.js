import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import PieChart from "components/PieChart";
import DropdownExampleMultipleSelection from "components/DropdownMutiply";
import DropdownType from "components/Dropdown";
import { TYPE_OPTIONS } from "constants/constans";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const PieRow = () => {
  const {
    selectTypeStore,
    selectCountriesStore,
    fetchDataStore,
    selectDateStore,
  } = useStores();

  const options = [];

  const defaultOptions = ["Soroca", "Cahul"];

  useEffect(() => {
    selectCountriesStore.addDefaultSelectionsDistricts(defaultOptions);
  }, []);

  if (fetchDataStore.isLoaded) {
    fetchDataStore.dataOfRaion.data.simpleChartDistrictList.forEach((e, i) => {
      options.push({
        key: i,
        text: e.district,
        value: e.district,
      });
    });
  }
  return (
    <Grid.Row columns={2}>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <PieChart />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <p>Please, select regions</p>
        <DropdownExampleMultipleSelection
          options={options}
          handleChange={(value) => {
            return selectCountriesStore.handleChangeDistricts(value);
          }}
          defaultValue={selectCountriesStore.selectDistrictsMoldova}
        />
      </Grid.Column>
    </Grid.Row>
  );
};
export default observer(PieRow);
