import React from 'react';

import classes from './FilterDrawer.css'

const filterDrawer = (props) => {
    let mergedClasses = [classes.FilterDrawer, classes.Close];

    if(props.open) mergedClasses = [classes.FilterDrawer, classes.Open];
    return(
        <div className={mergedClasses.join(' ')}>
            FILTER
        </div>
    )
};

export default filterDrawer;