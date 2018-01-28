import React from 'react';
import cellClass from '../Cells.css';
import classes from './S2.css';
import SeminarChip from './SeminarChip'

const s2 = (props) => {
    const seminars = props.data.seminars.map((seminar, key) => (<SeminarChip seminar={seminar} key={key}/>))
    return (
        <div className={[cellClass.Cell, classes.S2].join(' ')}>
            <div className={classes.TopBar}><p className={classes.Header}>3/6 Pflichtschulungen abgeschlossen</p></div>
            <div className={classes.MainContent}>
                <div className={classes.StaticStats}>
                    <div className={classes.Experience}>
                        <div className={classes.BoxDescription}>Experience In</div>
                        top
                    </div>
                    <div className={classes.PastProjects}>
                        <div className={classes.BoxDescription}>Past Projects</div>
                        2 IT-Projekte, 1 Strategieprojekt
                    </div>
                    <div className={classes.Skills}>
                        <div className={classes.Skill1}><div style={{color: "black"}} className={classes.BoxDescription}>Skill1</div>Web Development</div>
                        <div className={classes.Skill2}><div style={{color: "black"}} className={classes.BoxDescription}>Skill2</div>Something else</div>
                    </div>
                </div>
                <div className={classes.SeminarView}>
                    {seminars}
                </div>
            </div>
        </div>
    )
};

export default s2;