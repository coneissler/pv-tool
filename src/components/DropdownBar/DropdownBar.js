import React from 'react';
import Dropdown from './Dropdown/Dropdown'
import {connect} from 'react-redux'

import classes from './DropdownBar.css'



const dropdownBar = (props) => {
    return(
        <div className={classes.DropdownBar} style={{width: '100%'}}>
            <div className={classes.DropdownBar}>
                <Dropdown config={props.vis[0]} changeHandler={(event) => props.change("col1", event.target.value)}/>
                <Dropdown config={props.vis[1]} changeHandler={(event) => props.change("col2", event.target.value)}/>
                <Dropdown config={props.vis[2]} changeHandler={(event) => props.change("col3", event.target.value)}/>
                <Dropdown config={props.vis[3]} changeHandler={(event) => props.change("col4", event.target.value)}/>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        vis: [state.col1, state.col2, state.col3, state.col4]
    }
};

export default connect(mapStateToProps)(dropdownBar);