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
        window.scroll(0, window.pageYOffset - 350);
        this.setState({ stepSize: this.state.stepSize-5 });
    }

    scrollToTop = () => {
        let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
        this.setState({ intervalId: intervalId });
    }


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
                <div className={classes.BorderArea} style={{right: '0'}}><button className={classes.BackToTop} onClick={this.scrollToTop}>
                    <svg height='80%' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
                        <path fill='#fff' d='M3.352,48.296l28.56-28.328l28.58,28.347c0.397,0.394,0.917,0.59,1.436,0.59c0.52,0,1.04-0.196,1.436-0.59 c0.793-0.787,0.793-2.062,0-2.849l-29.98-29.735c-0.2-0.2-0.494-0.375-0.757-0.475c-0.75-0.282-1.597-0.107-2.166,0.456 L0.479,45.447c-0.793,0.787-0.793,2.062,0,2.849C1.273,49.082,2.558,49.082,3.352,48.296z'
                        />
                    </svg>
                </button></div>
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