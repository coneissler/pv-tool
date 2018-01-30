import React from 'react';

import classes from './ProjectDisplay.css'


const projectDisplay = (props) => {
    let style, headerStyle, projectTyp, client, bt, status;
    // check for data
    projectTyp = typeof props.display.projectTyp === 'string' ? props.display.projectTyp : ''
    client = typeof props.display.client === 'string' ? props.display.client : ''
    bt = typeof props.display.client === 'number' ? props.display.bt : 0
    status = typeof props.display.status === 'number' ? props.display.status : 0

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
                <div className={style}>
                    <div className={headerStyle}>{status === 0 ? 'In Arbeit' : 'Abgeschlossen'}</div>
                    <p>Projekttyp: {projectTyp}</p>
                    <p>Kunde: {client}</p>
                    <p>BT: {bt}</p>

                </div>
        </div>
    )
};

export default projectDisplay;