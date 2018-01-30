import React from 'react';
import classes from './SeminarChip.css'

const seminarChip = (props) => {
    const style = props.completed ? classes.Completed : classes.Open
    return(
        <div className={style}>{props.name}</div>
    )
};

export default seminarChip;