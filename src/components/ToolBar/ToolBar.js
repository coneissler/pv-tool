import React from 'react';

import FilterIcon from '../../assets/Icons/FilterIcon'
import AddIcon from '../../assets/Icons/AddIcon'

import classes from './ToolBar.css'

const toolbar = (props) => {
    return (
        <div className={classes.ToolBar}>
            <button disabled onClick={props.filterToggle} ><FilterIcon open={props.openFilter}/></button>
            <input type="text" placeholder="Suche..." className={classes.Input}/>
            <AddIcon/>
        </div>
    )
};

export default toolbar;