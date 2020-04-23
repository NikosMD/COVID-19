import React from "react";
import { Dropdown } from "semantic-ui-react";
import { observer } from "mobx-react";

const DropdownType = (props) => {

  return (
    <Dropdown
      placeholder="Select Friend"
      fluid
      selection
      options={props.type}
      defaultValue={props.default}
      onChange={(e, { value }) => {
        console.log(props)
        props.onValueChange(value);
      }}
    />
  );
};

export default observer(DropdownType);
