import React from 'react';
import cellClass from '../Cells.css';
import classes from './A2.css';

const a2 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.A2].join(' ')}>
            <div className={classes.TopBar}>
                <div className={classes.RessortMarker}></div>
            </div>
        </div>
    )
};

export default a2;