import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

import Dropdownbar from '../../components/DropdownBar/DropdownBar';
import Aux from '../../hoc/AuxComponent/Aux'
import Toolbar from '../../components/ToolBar/ToolBar'
import FilterDrawer from '../../components/FilterDrawer/FilterDrawer'


class Topbar extends Component {
    state = {
        expandFilter: false
    };

    inputChangedHandler = (col, element) => {
        if(col[3] < 3){
            if(element[1] === '1'){
                this.props.onDropdownChangeHandler_l1(col, element)
            }else {
                this.props.onDropdownChangeHandler_l2(col, element)
            }
        }else{
            if(element[1] === '1'){
                this.props.onDropdownChangeHandler_r1(col, element)
            }else {
                this.props.onDropdownChangeHandler_r2(col, element)
            }
        }
    };

    filterToggelHandler = () => {
        const filterState = !this.state.expandFilter;
        this.setState({
            expandFilter: filterState
        });
    };


    render(){
        return(
            <Aux>
                <Toolbar filterToggle={this.filterToggelHandler} style={{zIndex: '100000'}}/>
                <Dropdownbar change={this.inputChangedHandler} style={{zIndex: '100000'}}/>
                <FilterDrawer open={this.state.expandFilter}/>
            </Aux>
        );
    }
}

const mapDispatchToProps  = dispatch => {
    return {
        onDropdownChangeHandler_l1: (col, element) => dispatch({type: actionTypes.CHANGE_LEFT_BY1, col: col, element: element[0]}),
        onDropdownChangeHandler_l2: (col, element) => dispatch({type: actionTypes.CHANGE_LEFT_BY2, col: col,  element: element[0]}),
        onDropdownChangeHandler_r1: (col, element) => dispatch({type: actionTypes.CHANGE_RIGHT_BY1, col: col,  element: element[0]}),
        onDropdownChangeHandler_r2: (col, element) => dispatch({type: actionTypes.CHANGE_RIGHT_BY2, col: col,  element: element[0]})
    }
};

export default connect(null, mapDispatchToProps)(Topbar);