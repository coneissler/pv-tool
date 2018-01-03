import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import Column from '../../components/Column/Column'
import classes from './Element.css'



class Element extends Component {
    state = {
        hover: false
    };

    rowHoverHandler = () => {
        const newState = !this.state.hover;
        this.setState({
            hover: newState
        })
    };



    render(){
        let style = [classes.Element, "show-grid"].join(' ');
        if(this.state.hover) style = [classes.Element, classes.Hover, "show-grid"].join(' ');
        return(
            <Row onMouseEnter={this.rowHoverHandler}
                 onMouseLeave={this.rowHoverHandler}
                 className={style}
            >
                <Column type={this.props.col1.element} size={this.props.col1.size}/>
                <Column type={this.props.col2.element} size={this.props.col2.size}/>
                <Column type={this.props.col3.element} size={this.props.col3.size}/>
                <Column type={this.props.col4.element} size={this.props.col4.size}/>
            </Row>
        );
    }
}

export default Element;