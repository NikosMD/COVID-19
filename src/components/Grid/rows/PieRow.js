import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import PieChart from "components/PieChart";
import DropdownExampleMultipleSelection from "components/DropdownMutiply";
import DropdownType from "components/Dropdown";
import { TYPE_OPTIONS } from "constants/constans";
import { useStores } from "Hooks/useHooks";


const PieRow = () => {
  const { selectTypeStore } = useStores();

  const defaultOptions = TYPE_OPTIONS.find((e, i) => i < 1).value;

  useEffect(() => {
    selectTypeStore.handleCountryChange(defaultOptions);
  });

  const handleValueChange = (value) => {
    selectTypeStore.handleCountryChange(value)
  }
  return (
    <Grid.Row columns={2}>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <PieChart />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={8}>
        <p>Please, select type of info</p>
        <DropdownType 
          type={TYPE_OPTIONS} 
          select={selectTypeStore} 
          onValueChange={handleValueChange} 
          default={ defaultOptions } 
        />
        <p>Please, select regions</p>
        <DropdownExampleMultipleSelection />
      </Grid.Column>
    </Grid.Row>
  );
};

export default PieRow;
