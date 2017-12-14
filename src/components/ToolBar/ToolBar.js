import React from 'react';
import {Button, Row, Col, Grid} from 'react-bootstrap';

import classes from './ToolBar.css'

const toolbar = (props) => {
    return(
        <div className={classes.ToolBar}>
            <Grid fluid style={{height: '100%'}}>
                <Row className="show-grid align-items-center">
                    <Col xs={6} sm={6} md={2} lg={1} className="align-middle" style={{padding: '5px'}}>
                        <div>
                            <Button bsStyle="danger">FILTER</Button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={10} style={{padding: '5px'}}>
                        <div className={classes.Input}>
                            <input type="text" placeholder="Suche..." className={classes.TextBox}/>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={2} lg={1} className="align-middle" style={{ height:'100%'}}>
                        <div>
                            <Button bsStyle="danger">ADD</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
};

export default toolbar;