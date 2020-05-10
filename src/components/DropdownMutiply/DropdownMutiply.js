import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const DropdownExampleMultipleSelection = (props) => {
  const [loadedDefault, setLoaded] = useState(false);
  const { selectCountriesStore, fetchDataStore } = useStores();

  useEffect(() => {
    setLoaded(true);
  }, []);

  // selectCountriesStore.addDefaultSelections(defaultOptions);
  return (
    loadedDefault && (
      <Dropdown
        placeholder="Country"
        fluid
        multiple
        search
        selection
        defaultValue={props.defaultValue}
        options={props.options}
        onChange={(e, { value }) => {
           props.handleChange(value);
        }}
      />
    )
  );
};

export default observer(DropdownExampleMultipleSelection);
