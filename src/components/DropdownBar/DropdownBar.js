import React from 'react';
import Dropdown from './Dropdown/Dropdown'
import {connect} from 'react-redux'

import classes from './DropdownBar.css'



const dropdownBar = (props) => {
    return(
        <div className={classes.DropdownBar} style={{width: '100%'}}>
            <div className={classes.DropdownBar}>
                <Dropdown config={props.vis0}
                          changeHandler={(event) => props.change(0, event.target.value)}/>
                <Dropdown config={props.vis1}
                          changeHandler={(event) => props.change(1, event.target.value)}/>
                <Dropdown config={props.vis2}
                          changeHandler={(event) => props.change(2, event.target.value)}/>
                <Dropdown config={props.vis3}
                          changeHandler={(event) => props.change(3, event.target.value)}/>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        vis0: state.mod[0],
        vis1: state.mod[1],
        vis2: state.mod[2],
        vis3: state.mod[3],

    }
};

export default connect(mapStateToProps)(dropdownBar);