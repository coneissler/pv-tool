import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actions'
import Dropdownbar from '../../components/DropdownBar/DropdownBar';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import Toolbar from '../../components/ToolBar/ToolBar'
import FilterDrawer from '../../components/FilterDrawer/FilterDrawer'


class Topbar extends Component {
    state = {
        expandFilter: false
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
                <Toolbar openFilter={this.state.expandFilter} filterToggle={this.filterToggelHandler} style={{zIndex: '100000'}}/>
                <Dropdownbar change={this.props.dropDownChanged} style={{zIndex: '100000'}}/>
                <FilterDrawer open={this.state.expandFilter}/>
            </Aux>
        );
    }
}

const mapDispatchToProps  = dispatch => {
    return {
        dropDownChanged:(col, element) => dispatch(actions.dropdownChanged(col, element))
    }
};

export default connect(null, mapDispatchToProps)(Topbar);