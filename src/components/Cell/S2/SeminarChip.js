import React from 'react';
import classes from './SeminarChip.css'

const seminarChip = (props) => {
    const style = props.seminar.completed ? classes.Completed : classes.Open
    return(
        <div className={style}>{props.seminar.name}</div>
    )
};

export default seminarChip;