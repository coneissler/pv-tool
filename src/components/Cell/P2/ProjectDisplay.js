import React from 'react';

import classes from './ProjectDisplay.css'


const projectDisplay = (props) => {
    let style;
        switch(props.display.status){
        case 0:
            style=classes.InWork
            break
        case 1:
            style = classes.Finished
            break
        default:
            style = classes.InWork
    }

    return(
        <div className={classes.Display}>

            {props.display ?
                <div className={style}>
                    <p>Projekt Typ: {props.display.type}</p>
                    <p>BT: {props.display.bt}</p>
                    <p>PL: {props.display.projectLeader}</p>
                </div>
            : null}


        </div>
    )
};

export default projectDisplay;