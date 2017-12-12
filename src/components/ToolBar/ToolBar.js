import React from 'react';

import classes from './ToolBar.css'

const toolbar = (props) => {
    return(
        <div className={classes.ToolBar}>
            <div className={classes.ToolBarElements} style={{float: 'left'}}>
               <button>FILTER</button>
            </div>
            <div className={classes.Input}>
                <input type="text" placeholder="Suche..." className={classes.TextBox}/>
            </div>
            <div className={classes.ToolBarElements} style={{float: 'right'}}>
               <button>ADD</button>
            </div>
        </div>
    )
};

export default toolbar;