import React from "react";
import { Container, Grid } from "semantic-ui-react";
import "./Grid.scss";
import LineChart from "components/LineChart";
import PieChart from "components/PieChart";
import Map from "components/Map";
import DropdownExampleMultipleSelection from "components/DropdownMutiply";
import DropdownType from "components/Dropdown";
import DataPicker from "components/DataPicker";
import Table from "components/Table";

const AnotherGridLayout = () => (
  <Container>
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <LineChart />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <p>Please, select type of info</p>
          <DropdownType />
          <p>Please, select countries</p>
          <DropdownExampleMultipleSelection />
          <p>Please, select data range</p>
          <DataPicker />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <p>
            <Map />
          </p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <p>Please, select country</p>
          <DropdownType></DropdownType>
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
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <PieChart />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <p>Please, select type of info</p>
          <DropdownType />
          <p>Please, select regions</p>
          <DropdownExampleMultipleSelection />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default AnotherGridLayout;
