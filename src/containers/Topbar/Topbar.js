import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

import Dropdownbar from '../../components/DropdownBar/DropdownBar';
import Aux from '../../hoc/Aux/Aux'
import Toolbar from '../../components/ToolBar/ToolBar'


class Topbar extends Component {

    inputChangedHandler = (row, element) => {
        if(row[3] < 3){
            if(element[1] === '1'){
                this.props.onDropdownChangeHandler_l1(row, element)
            }else {
                this.props.onDropdownChangeHandler_l2(row, element)
            }
        }else{
            if(element[1] === '1'){
                this.props.onDropdownChangeHandler_r1(row, element)
            }else {
                this.props.onDropdownChangeHandler_r2(row, element)
            }
        }


    };

    render(){
        return(
            <Aux>
                <Toolbar/>
                <Dropdownbar change={this.inputChangedHandler}/>´
            </Aux>
        );
    }
}

const mapDispatchToProps  = dispatch => {
    return {
        onDropdownChangeHandler_l1: (row, element) => dispatch({type: actionTypes.CHANGE_LEFT_BY1, row: row, element: element[0]}),
        onDropdownChangeHandler_l2: (row, element) => dispatch({type: actionTypes.CHANGE_LEFT_BY2, row: row,  element: element[0]}),
        onDropdownChangeHandler_r1: (row, element) => dispatch({type: actionTypes.CHANGE_RIGHT_BY1, row: row,  element: element[0]}),
        onDropdownChangeHandler_r2: (row, element) => dispatch({type: actionTypes.CHANGE_RIGHT_BY2, row: row,  element: element[0]})
    }
};

export default connect(null, mapDispatchToProps)(Topbar);