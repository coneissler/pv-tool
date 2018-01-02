import React from 'react';

import classes from './Button.css'

const button = (props) => {
    return(
            <img className={classes.Button} src={props.source} alt={props.alt}/>
    )
};

export default button;