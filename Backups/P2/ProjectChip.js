import React from 'react';

import classes from './ProjectChip.css'

const projectChip = (props) => {
    let style = classes.ProjectChipB
    let posStyle = {background: "transparent"}
    if(props.id % 2 === 0){
        style = classes.ProjectChipA
        posStyle = {background: "transparent"}
}

    return(
        <div onMouseEnter={() => props.onHover(props.id)} onMouseLeave={() => props.onHover(-1)} className={style}>
            {props.project.name}
            <div className={classes.Position} style={posStyle}>
                {props.project.position}
            </div>
        </div>
    )
};

export default projectChip;