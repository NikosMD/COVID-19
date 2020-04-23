import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const DropdownExampleMultipleSelection = () => {
  const options = [];
  const [defaultOptions, setDefaultOptions] = useState([]);
  const [loadedDefault, setLoaded] = useState(false);
  const { selectCountriesStore, fetchDataStore } = useStores();

  useEffect(() => {
    setDefaultOptions(options.slice(0, 4).map((option) => option.value));
    selectCountriesStore.handleChange(defaultOptions);
    setLoaded(true);
  }, []);

  selectCountriesStore.addDefaultSelections(defaultOptions);

  if (fetchDataStore.isLoaded) {
    fetchDataStore.dataOfCountry.Countries.forEach((Country, index) => {
      options.push({
        key: index,
        text: Country.Country,
        value: Country.Country,
      });
    });
  }

  return (
    loadedDefault && (
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
    )
  );
};

export default observer(DropdownExampleMultipleSelection);
