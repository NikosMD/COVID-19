import React from "react";
import { Container, Grid } from "semantic-ui-react";
import "./Grid.scss";
import ChartRow from "./rows/ChartRow"
import MapRow from "./rows/MapRow"
import PieRow from "./rows/PieRow"


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
