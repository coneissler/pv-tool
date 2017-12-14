import React from 'react';
import cellClass from '../Cells.css';
import classes from './S1.css';

const s1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.S1].join(' ')}>S1</div>
    )
};

export default s1;