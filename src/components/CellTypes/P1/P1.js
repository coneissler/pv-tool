import React from 'react';
import cellClass from '../Cells.css';
import classes from './P1.css';

const p1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.P1].join(' ')}>P1</div>
    )
};

export default p1;