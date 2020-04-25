import React from "react";
import { Container, Grid } from "semantic-ui-react";
import "./Grid.scss";
import ChartRow from "containers/ChartRow";
import MapRow from "containers/MapRow";
import PieRow from "containers/PieRow";

const AnotherGridLayout = () => {
  return (
    <Container>
      <Grid divided="vertically">
        <ChartRow />
        <MapRow />
        <PieRow />
      </Grid>
    </Container>
  );
};

export default AnotherGridLayout;
