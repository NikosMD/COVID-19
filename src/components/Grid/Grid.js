import React from 'react';
import { Container, Grid} from 'semantic-ui-react'
import './Grid.scss'
import Chart from 'components/Chart';
import Map from 'components/Map';
import DropdownExampleMultipleSelection from 'components/DropdownMutiply';
import DropdownType from 'components/Dropdown';
import DataPicker from 'components/DataPicker';

import STYLE_LINK from "constants/constans"

 const AnotherGridLayout = () => (
    <Container>
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <Chart>
                    </Chart>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <p>Please, select type of info</p>
                    <DropdownType></DropdownType>
                    <p>Please, select countries</p>
                    <DropdownExampleMultipleSelection></DropdownExampleMultipleSelection>
                    <p>Please, select data range</p>
                    <DataPicker></DataPicker>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <p>
                        <Map></Map>
                    </p>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <p>Please, select country</p>
                    <DropdownType></DropdownType>
                    <Grid  divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column className="dataColumn" mobile={8} tablet={8} computer={8}> 
                                <p>New Confirmed: 121212</p>
                            </Grid.Column>
                            <Grid.Column className="dataColumn" mobile={8} tablet={8} computer={8}> 
                                <p>Total Confirmed: 123123123</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column mobile={8} tablet={8} computer={8}> 
                                <p>New Deaths: 121212</p>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={8}> 
                                <p>Total Deaths: 63263</p>
                            </Grid.Column>
                        </Grid.Row>   
                        <Grid.Row columns={2}>
                            <Grid.Column mobile={8} tablet={8} computer={8}> 
                                <p>New Recovered: 123123123</p>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={8}> 
                                <p>Total Recovered: 123123123</p>
                            </Grid.Column>
                        </Grid.Row>      
                    </Grid> 
                </Grid.Column>
            </Grid.Row>    
        </Grid>
    </Container>
  )


export default AnotherGridLayout