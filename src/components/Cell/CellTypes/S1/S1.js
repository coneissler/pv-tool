import React from 'react';
import cellClass from '../Cells.css';
import classes from './S1.css';
// import ContactButton from '../../../ContactButton/ContactButton'

const s1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.S1].join(' ')}>s1
        </div>
    )
};

export default s1;