import React from 'react';
import Dropdown from './Dropdown/Dropdown'
import {connect} from 'react-redux'

import classes from './DropdownBar.css'



const dropdownBar = (props) => {
    return(<div className={classes.DropdownBar}>
            <Dropdown config={props.vis[0]} changeHandler={(event) => props.change("row1", event.target.value)}/>
            <Dropdown config={props.vis[1]} changeHandler={(event) => props.change("row2", event.target.value)}/>
            <Dropdown config={props.vis[2]} changeHandler={(event) => props.change("row3", event.target.value)}/>
            <Dropdown config={props.vis[3]} changeHandler={(event) => props.change("row4", event.target.value)}/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        vis: [state.row1, state.row2, state.row3, state.row4]
    }
};

export default connect(mapStateToProps)(dropdownBar);