import React from 'react';

import classes from './ProjectDisplay.css'


const projectDisplay = (props) => {
    return(
            <div className={classes.Display}>
                <li>{props.display.projectTyp}</li>
                <li>{props.display.client}</li>
                <li>{props.display.bt} BT</li>
            </div>
    )
};

export default projectDisplay;