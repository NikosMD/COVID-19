import React, { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";

const friendOptions = [
  {
    key: "Cases",
    text: "Случаи",
    value: "Случаи",
  },
  {
    key: "Deaths",
    text: "Deaths",
    value: "Deaths",
  },
  {
    key: "Recovered",
    text: "Recovered",
    value: "Recovered",
  },
  {
    key: "Infected",
    text: "Infected",
    value: "Infected",
  },
];
const defaultOptions = friendOptions[0].value;
const DropdownType = () => {
  useEffect(() => {
    selectTypeStore.handleChange(defaultOptions);
  });
  const { selectTypeStore } = useStores();

  return (
    <Dropdown
      placeholder="Select Friend"
      fluid
      selection
      options={friendOptions}
      defaultValue={defaultOptions}
      onChange={(e, { value }) => {
        selectTypeStore.handleChange(value);
      }}
    />
  );
};

export default observer(DropdownType);
