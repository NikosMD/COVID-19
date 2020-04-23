import React, { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const DropdownType = (props) => {
  const defaultOptions = props.type.find((e, i) => i < 1).value;

  useEffect(() => {
    selectTypeStore.handleChange(defaultOptions);
    selectCountryStore.handleChange(defaultOptions);
  });
  const { selectTypeStore, selectCountryStore } = useStores();

  return (
    <Dropdown
      placeholder="Select Friend"
      fluid
      selection
      options={props.type}
      defaultValue={defaultOptions}
      onChange={(e, { value }) => {
        props.select.handleChange(value);
      }}
    />
  );
};

export default observer(DropdownType);
