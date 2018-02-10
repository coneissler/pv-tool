import React from 'react';

import classes from './ProjectDisplay.css'


const projectDisplay = (props) => {
    let projectTyp, client, bt, status;
    // check for data
    projectTyp = typeof props.display.projectTyp === 'string' ? props.display.projectTyp : 'Projekttyp'
    client = typeof props.display.client === 'string' ? props.display.client : 'Kunde'
    bt = typeof props.display.bt === 'number' ? props.display.bt : ''
    status = typeof props.display.status === 'number' ? props.display.status : 0

    return(
        <div className={status === 1 ? classes.HeaderFinished : classes.HeaderInWork}>
            <div className={classes.Display}>
                <li>{projectTyp}</li>
                <li>{client}</li>
                <li>{bt} BT</li>
            </div>
        </div>
    )
};

export default projectDisplay;