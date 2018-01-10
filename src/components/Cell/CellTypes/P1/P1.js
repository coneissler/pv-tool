import React from 'react';
import cellClass from '../Cells.css';
import classes from './P1.css';

const p1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.P1].join(' ')}>project: {props.data.project},
            bt: {props.data.bt},
            projectLeader: {props.data.projectLeader}</div>
    )
};

export default p1;