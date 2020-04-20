import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const options = [];

const DropdownExampleMultipleSelection = () => {
  // const defaultOptions = ;
  const [defaultOptions, setDefaultOptions] = useState([]);
  useEffect(() => {
    selectCountriesStore.handleChange(defaultOptions);
    if (options[0]) setDefaultOptions([options[0].value, options[1].value]);
  }, []);

  const { selectCountriesStore, fetchDataStore } = useStores();

  if (fetchDataStore.isLoaded) {
    const allDataCountry = fetchDataStore.dataOfCountry.Countries.reduce(
      (acc, cv) => {
        return { ...acc, [cv.Country]: cv };
      },
      {}
    );
    fetchDataStore.dataOfCountry.Countries.forEach((Country, i) => {
      options.push({
        key: i,
        text: Country.Country,
        value: Country.Country,
      });
    });
    console.log(defaultOptions);
    return (
      <Dropdown
        placeholder="Country"
        fluid
        multiple
        selection
        defaultValue={defaultOptions}
        options={options}
        onChange={(e, { value }) => {
          selectCountriesStore.handleChange(value);
        }}
      />
    );
  } else return;
};

export default observer(DropdownExampleMultipleSelection);
