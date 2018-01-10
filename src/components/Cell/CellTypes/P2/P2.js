import React from 'react';
import cellClass from '../Cells.css';
import classes from './P2.css';

const p2 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.P2].join(' ')}>P2</div>
    )
};

export default p2;