import React from 'react';
import { Container, Grid} from 'semantic-ui-react'
import './Grid.scss'
import STYLE_LINK from "constants/constans"

 const AnotherGridLayout = () => (
    <Container>
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <p>
                        <span>=</span>
                    </p>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <p>
                        <span>=</span>
                    </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <p>
                        <span>=</span>
                    </p>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <p>
                        <span>=</span>
                    </p>
                </Grid.Column>
            </Grid.Row>    
        </Grid>
    </Container>
  )


export default AnotherGridLayout