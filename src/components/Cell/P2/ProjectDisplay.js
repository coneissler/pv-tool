import React from 'react';

import classes from './ProjectDisplay.css'


const projectDisplay = (props) => {
    let style;
    let headerStyle;
        switch(props.display.status){
        case 0:
            style=classes.InWork
            headerStyle=classes.HeaderInWork
            break
        case 1:
            style = classes.Finished
            headerStyle=classes.HeaderFinished
            break
        default:
            style = classes.InWork
    }

    return(
        <div className={classes.Display}>

            {props.display ?
                <div className={style}>
                    <div className={headerStyle}>{props.display.status === 0 ? 'In Arbeit' : 'Abgeschlossen'}</div>
                    <p>Projekt Typ: {props.display.type}</p>
                    <p>BT: {props.display.bt}</p>
                    <p>PL: {props.display.projectLeader}</p>
                </div>
            : null}


        </div>
    )
};

export default projectDisplay;