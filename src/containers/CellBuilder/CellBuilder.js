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
                (<Element element1={this.props.element1}
                          size1={this.props.size1}
                          element2={this.props.element2}
                          size2={this.props.size2}
                          element3={this.props.element3}
                          size3={this.props.size3}
                          element4={this.props.element4}
                          size4={this.props.size4}
                    key={i}/>

                );
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
    return{
        amount: state.rowAmount,
        size1: state.col1.size,
        size2: state.col2.size,
        size3: state.col3.size,
        size4: state.col4.size,
        element1: state.col1.element,
        element2: state.col2.element,
        element3: state.col3.element,
        element4: state.col4.element

    }
};

export default connect(mapStateToProps)(CellBuilder);