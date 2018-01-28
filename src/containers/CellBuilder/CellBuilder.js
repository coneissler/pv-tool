import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';

import Spinner from '../../assets/Spinner/Spinner';
import Element from '../Element/Element'
import classes from './CellBuilder.css';




class CellBuilder extends Component {
    state = {
        click: false,
        stepSize: 450
    };

    onSpinnerClickHandler = () => {
        const change = !this.state.click;
        this.setState({click: change});
    };

    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
            this.setState({ stepSize: 450 });
        }
        window.scroll(0, window.pageYOffset - this.state.stepSize);
        this.setState({ stepSize: this.state.stepSize-5 });
        console.log(this.state.stepSize)
    }

    scrollToTop = () => {
        let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
        this.setState({ intervalId: intervalId });
    }


    render() {
        window.scroll(function(){
            console.log(this.scrollTop())
        })
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
                <div className={classes.BorderArea} style={{right: '0'}}><button onClick={this.scrollToTop}>TOP</button></div>
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