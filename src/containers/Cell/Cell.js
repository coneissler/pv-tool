import React from 'react';
import classes from './Cell.css'
import {Grid, Row, Col} from 'react-bootstrap'

import A1 from './CellTypes/A1/A1';
import A2 from './CellTypes/A2/A2';
import P1 from './CellTypes/P1/P1';
import P2 from './CellTypes/P2/P2';
import S1 from './CellTypes/S1/S1';
import S2 from './CellTypes/S2/S2';

const cell = (props) => {
    return(
        <div className={classes.Cell}>
            <Grid fluid style={{height: '500px'}}>
                <Row className="show-grid" >
                    <Col xs={12} sm={12} md={6} lg={6} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightblue'}}> </div></Col>
                    <Col xs={6} sm={6} md={3} lg={3} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightgreen'}}> </div></Col>
                    <Col xs={6} sm={6} md={3} lg={3} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightsalmon'}}> </div></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} sm={12} md={6} lg={6} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightblue'}}> </div></Col>
                    <Col xs={6} sm={6} md={3} lg={3} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightgreen'}}> </div></Col>
                    <Col xs={6} sm={6} md={3} lg={3} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightsalmon'}}> </div></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} sm={12} md={6} lg={6} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightblue'}}> </div></Col>
                    <Col xs={6} sm={6} md={3} lg={3} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightgreen'}}> </div></Col>
                    <Col xs={6} sm={6} md={3} lg={3} style={{height: '10em', padding: '5px'}}><div style={{width: '100%', height: '100%', backgroundColor:'lightsalmon'}}> </div></Col>
                </Row>
            </Grid>
        </div>
    )
};

export default cell;