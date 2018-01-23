import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import Column from '../../components/Column/Column'
import classes from './Element.css'

import A1 from '../../components/Cell/CellTypes/A1/A1'
import A2 from '../../components/Cell/CellTypes/A2/A2'
import P1 from '../../components/Cell/CellTypes/P1/P1'
import P2 from '../../components/Cell/CellTypes/P2/P2'
import S1 from '../../components/Cell/CellTypes/S1/S1'
import S2 from '../../components/Cell/CellTypes/S2/S2'


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

        const cellMap = {
            a1: <A1 dataId={this.props.dataId}/>,
            a2: <A2 closeSocial={this.state.hover} dataId={this.props.dataId}/>,
            p1: <P1 dataId={this.props.dataId}/>,
            p2: <P2 dataId={this.props.dataId}/>,
            s1: <S1 dataId={this.props.dataId}/>,
            s2: <S2 dataId={this.props.dataId}/>
        }
        return(
            <Row onMouseEnter={this.rowHoverHandler}
                 onMouseLeave={this.rowHoverHandler}
                 className={style}>
                <Column size={this.props.size1}>{cellMap[this.props.element1 + this.props.size1]}</Column>
                <Column size={this.props.size2}>{cellMap[this.props.element2 + this.props.size2]}</Column>
                <Column size={this.props.size3}>{cellMap[this.props.element3 + this.props.size3]}</Column>
                <Column size={this.props.size4}>{cellMap[this.props.element4 + this.props.size4]}</Column>
            </Row>
        );
    }
}

export default Element;