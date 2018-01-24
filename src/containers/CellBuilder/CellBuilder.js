import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';

import Spinner from '../../assets/Spinner/Spinner';
import Element from '../Element/Element'
import classes from './CellBuilder.css';

class CellBuilder extends Component {
    state = {
        click: false
    };

    onSpinnerClickHandler = () => {
        const change = !this.state.click;
        this.setState({click: change});
    };

    render() {
        let mappedRows = [];

        for (let i = 0; i < this.props.amount; i++) {
            const newRow =
                (<Element dataId={i} key={i}/>);
            mappedRows.push(newRow);

        }
        return(
            <div>
            <div className={classes.BorderArea} style={{left: '0'}}/>
            <div className={classes.CellBuilder}>
                <Grid fluid >
                    {mappedRows} <Spinner click={this.state.click} clickHandler={this.onSpinnerClickHandler}/>
                </Grid>
            </div>
            <div className={classes.BorderArea} style={{right: '0'}}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        amount: state.rowAmount
    }
};

export default connect(mapStateToProps)(CellBuilder);