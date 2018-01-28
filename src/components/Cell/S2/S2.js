import React from 'react';
import cellClass from '../Cells.css';
import classes from './S2.css';

const s2 = (props) => {
    return (
        <div className={[cellClass.Cell, classes.S2].join(' ')}>
            <div className={classes.TopBar}><p className={classes.Header}>6 externe Projekte abgeschlossen</p></div>
            <div className={classes.MainContent}>
                <div className={classes.StaticStats}>l</div>
                <div className={classes.SeminarView}>r</div>
            </div>
        </div>
    )
};

export default s2;