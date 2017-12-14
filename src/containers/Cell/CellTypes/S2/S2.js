import React from 'react';
import cellClass from '../Cells.css';
import classes from './S2.css';

const s2 = (props) => {
    return (
        <div className={[cellClass.Cell, classes.S2].join(' ')}>S2</div>
    )
};

export default s2;