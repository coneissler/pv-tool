import React from 'react';
import cellClass from '../Cells.css';
import classes from './S2.css';
import SeminarChip from './SeminarChip'
import SkillChip from './SkillChip'

const s2 = (props) => {
  const data = props.data
  const seminars = [], skills1 = [], skills2 = []
  data.seminars.map((sem, key) => {
    seminars.push(<SeminarChip completed={sem.completed}
                   name={sem.name}
                   key={key}
                  />)
    return null})
  data.skillSet1.map((sk, key) => {
    skills1.push(<SkillChip skill={sk} key={key} id={key} last={(key === data.skillSet1.length-1)}/>)
    return null})
  data.skillSet2.map((sk, key) => {
    skills2.push(<SkillChip skill={sk} key={key} id={key} last={(key === data.skillSet2.length-1)}/>)
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
                  <div className={classes.Skills}>
                  <div className={classes.SecondarySkills}>
                    {skills1}
                  </div>
                    <div className={classes.SecondarySkills}>
                      {skills2}
                    </div>
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

