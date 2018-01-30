import React from 'react';

import classes from './GeneralTopBar.css'
import Resort from './Resort'

const generalTopBar = (props) => {
    const addStyle = props.width === '100%' ? {marginRight: '3%'} : null
    return(
        <div className={classes.TopBar} style={{width: props.width}}>
            <p className={classes.Name} style={addStyle}>{props.name}</p>
            <div className={classes.ResIndicator}>
                <Resort res={props.resort}/>
            </div>
        </div>
    )
};

export default generalTopBar;