import React from 'react';
import cellClass from '../Cells.css';
import classes from './A2.css';

const a2 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.A2].join(' ')}>A2</div>
    )
};

export default a2;