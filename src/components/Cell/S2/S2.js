import React from 'react';
import cellClass from '../Cells.css';
import classes from './S2.css';
import SeminarChip from './SeminarChip'

const s2 = (props) => {
  const data = props.data
  const seminars = []
  data.seminars.map((sem, key) => {
    seminars.push(<SeminarChip completed={sem.completed}
                   name={sem.name}
                   key={key}/>)
    return null})
    return (
        <div className={cellClass.Cell}>
            <div className={classes.TopBar}><p className={classes.Header}>{seminars.length}/6 Pflichtschulungen abgeschlossen</p></div>
            <div className={classes.MainContent}>
                <div className={classes.StaticStats}>
                    <div className={classes.Experience}>
                        <div className={classes.BoxDescription}>Experience In</div>
                        {data.expieriencedIn}
                    </div>
                    <div className={classes.PastProjects}>
                        <div className={classes.BoxDescription}>Past Projects</div>
                        {data.pastProjects}
                    </div>
                    <div className={classes.Skills}>
                        <div className={classes.Skill1}>
                            <div style={{color: "black"}} className={classes.BoxDescription}>Skill1</div>{data.skill1}</div>
                        <div className={classes.Skill2}>
                            <div style={{color: "black"}} className={classes.BoxDescription}>Skill2</div>{data.skill2}</div>
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