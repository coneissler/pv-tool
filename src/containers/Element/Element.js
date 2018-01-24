import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import {connect} from 'react-redux'

import Column from '../../components/Column/Column'
import classes from './Element.css'

import A1 from '../../components/Cell/CellTypes/A1/A1'
import A2 from '../../components/Cell/CellTypes/A2/A2'
import P1 from '../../components/Cell/CellTypes/P1/P1'
import P2 from '../../components/Cell/CellTypes/P2/P2'
import S1 from '../../components/Cell/CellTypes/S1/S1'
import S2 from '../../components/Cell/CellTypes/S2/S2'
import D1 from '../../components/Cell/CellTypes/D1/D1'


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
            a1: <A1 data={this.props.a1}/>,
            a2: <A2 data={this.props.a2} closeSocial={this.state.hover}/>,
            p1: <P1 data={this.props.p1}/>,
            p2: <P2 data={this.props.p2}/>,
            s1: <S1 data={this.props.s1}/>,
            s2: <S2 data={this.props.s2}/>,
            d1: <D1/>
        }
        return(
            <Row onMouseEnter={this.rowHoverHandler}
                 onMouseLeave={this.rowHoverHandler}
                 className={style}>
                <Column size={this.props.mod0.size}>{cellMap[this.props.mod0.type + this.props.mod0.size]}</Column>
                <Column size={this.props.mod1.size}>{cellMap[this.props.mod1.type + this.props.mod1.size]}</Column>
                <Column size={this.props.mod2.size}>{cellMap[this.props.mod2.type + this.props.mod2.size]}</Column>
                <Column size={this.props.mod3.size}>{cellMap[this.props.mod3.type + this.props.mod3.size]}</Column>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    const id = 0
    return {
        mod0: state.mod[0],
        mod1: state.mod[1],
        mod2: state.mod[2],
        mod3: state.mod[3],
        a1: state.general1[id],
        a2: state.general2[id],
        p1: state.project1[id],
        p2: state.project2[id],
        s1: state.seminar1[id],
        s2: state.seminar2[id],
    }
}

export default connect(mapStateToProps)(Element);