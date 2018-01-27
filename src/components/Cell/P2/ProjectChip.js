import React from 'react';

import classes from './ProjectChip.css'

const projectChip = (props) => {
    let style = props.id % 2 === 0 ? classes.ProjectChipA : classes.ProjectChipB
    //style = props.project.status === 0 ? classes.Activ : style;
    return(
        <div onMouseEnter={() => props.onHover(props.id)} className={style}>
            {props.project.name}
            <div className={classes.Position}>
                PM
            </div>
        </div>
    )
};

export default projectChip;