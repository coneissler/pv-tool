import React from 'react';
import classes from './SeminarChip.css'

const seminarChip = (props) => {
    const style = props.completed ? classes.Completed : classes.Open
    return(
        <div className={style}>
          <div className={classes.Name}>{props.name}</div>
          {props.completed ? <div className={classes.Date}>28/08/2018</div> : null}
        </div>
    )
};

export default seminarChip;