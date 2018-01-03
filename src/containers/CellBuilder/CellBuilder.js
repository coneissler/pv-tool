import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';

import Element from '../Element/Element'
import classes from './CellBuilder.css';

class CellBuilder extends Component {


    render() {
        let mappedRows = [];

        for (let i = 0; i < this.props.amount; i++) {
            const newRow =
                (<Element col1={this.props.col1}
                      col2={this.props.col2}
                      col3={this.props.col3}
                      col4={this.props.col4}
                    key={i}/>

                );
            mappedRows.push(newRow);

        }
        return(
            <div>
            <div className={classes.BorderArea} style={{left: '0'}}/>
            <div className={classes.CellBuilder}>
                <Grid fluid >
                    {mappedRows}
                </Grid>
            </div>
            <div className={classes.BorderArea} style={{right: '0'}}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        amount: state.rowAmount,
        col1: state.col1,
        col2: state.col2,
        col3: state.col3,
        col4: state.col4
    }
};

export default connect(mapStateToProps)(CellBuilder);