import React from "react";
import { Grid } from "semantic-ui-react";
import Map from "components/Map";
import DropdownType from "components/Dropdown";
import Table from "components/Table";
import { useStores } from "Hooks/useHooks";

const MapRow = () => {
  const { fetchDataStore, selectTypeStore } = useStores();
  const options = [{ key: "world", text: "World", value: "world" }];

  if (fetchDataStore.isLoaded) {
    fetchDataStore.dataOfCountry.Countries.forEach((Country, index) => {
      options.push({
        key: Country.CountryCode,
        text: Country.Country,
        value: Country.Country,
      });
    });
  }

  const defaultOptions = options.find((e, i) => i < 1).value;

  const handleValueChange = (value) => {
    selectTypeStore.handleCountryChange(value);
  };

  return (
    <Grid.Row columns={2}>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <p>
          <Map options={options} />
        </p>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <p>Please, select country</p>
        <DropdownType
          type={options}
          select={selectTypeStore}
          onValueChange={handleValueChange}
          default={defaultOptions}
        />
        <Table
          header_1="Country"
          header_2="Confirmed"
          header_3="24 Hours"
          header_4="Deaths"
          header_5="24 Hours"
          header_6="%"
        />
        <Table
          header_1="Recovered"
          header_2="24 Hours"
          header_3="%"
          header_4="Infected"
          header_5="%"
          header_6="Date"
        />
      </Grid.Column>
    </Grid.Row>
  );
};

export default MapRow;
