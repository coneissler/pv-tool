import React from 'react';
import cellClass from '../Cells.css';
import classes from './A1.css';

const a1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.A1].join(' ')}>A1</div>
    )
};

export default a1;