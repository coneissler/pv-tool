import React from 'react';

import classes from './ProjectChip.css'

const projectChip = (props) => {
    let style = classes.ProjectChipB
    let posStyle = {background: "linear-gradient(to right, rgba(0,0,0,0) , rgba(100,100,100,0.8))"}
    if(props.id % 2 === 0){
        style = classes.ProjectChipA
        posStyle = {background: "linear-gradient(to right, rgba(0,0,0,0) , rgba(20,70,125,0.8))"}
}
    const position = typeof props.project.position === 'string' ? props.project.position : ''
    const name = typeof props.project.name === 'string' ? props.project.name : 'Projekt'
    return(
        <div onMouseEnter={() => props.onHover(props.id)} onMouseLeave={() => props.onHover(-1)} className={style}>
            {name}
            <div className={classes.Position} style={posStyle}>
                {position}
            </div>
        </div>
    )
};

export default projectChip;