import React from 'react';
import cellClass from '../Cells.css';
import classes from './D1.css';

const d1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.D1].join(' ')}>D1</div>
    )
};

export default d1;