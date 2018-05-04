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
    skills1.push(<SkillChip border skill={sk} key={key} id={key} last={(key === data.skillSet1.length-1)}/>)
    return null})
  data.skillSet2.map((sk, key) => {
    skills2.push(<SkillChip skill={sk} key={key} id={key} last={(key === data.skillSet2.length-1)}/>)
    return null})
  const noSkill = skills2.length === 0 && skills1.length === 0
  const noExperience = data.expieriencedIn === '-'
    return (
        <div className={cellClass.Cell}>
            <div className={classes.TopBar}><p className={classes.Header}>{data.completedSeminars}/6 Pflichtschulungen abgeschlossen</p></div>
            <div className={classes.MainContent}>
                <div className={classes.StaticStats}>
                  {noExperience ?
                    <div className={classes.Experience}>
                      <div className={classes.BoxDescriptionEmpty} style={{fontSize: '200%'}}>Experience In</div>
                    </div>
                    :
                    <div className={classes.Experience}>
                        <div className={classes.BoxDescription}>Experience In</div>
                        {data.expieriencedIn}
                    </div>}
                  {noSkill ?
                    <div className={classes.NoSkills}>
                      <div className={classes.BoxDescriptionEmpty} style={{color: 'rgb(20,70,125)', opacity: '0.3'}}>Skills</div>
                    </div>
                    :
                    <div className={classes.Skills}>
                      <div className={classes.SecondarySkills}>
                        {skills1}
                      </div>
                      <div className={classes.SecondarySkills}>
                        {skills2}
                      </div>
                    </div>}
                </div>
                <div className={classes.SeminarView}>
                    {seminars}
                </div>
            </div>
        </div>
    )
};

export default s2;

