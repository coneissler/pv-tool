import React from 'react';
import Bulletpoint from './Bulletpoint.js'
import classes from './VersionParagraph.css'

const versionParagraph = (props) => {
  let batteryClass
  const aprox = props.checkedTasks.length / (props.checkedTasks.length + props.openTasks.length)
    if(aprox === 1) batteryClass = classes.Power10
    else if(aprox > 0.66) batteryClass = classes.Power8
    else if(aprox > 0.33) batteryClass = classes.Power5
    else if(aprox > 0) batteryClass = classes.Power2
    else batteryClass = classes.PowerNone
    const checked = props.checkedTasks.map((tsk, key) => <Bulletpoint checked key={key} task={tsk}/>)
    const open = props.openTasks.map((tsk, key) => <Bulletpoint key={key} task={tsk}/>)
    return(
      <div className={classes.Container}>
        <div className={classes.Left}>
          <p>Version {props.version}</p>
          <div className={[classes.Battery, batteryClass].join(' ')}>
            <div className={classes.Cylindre}>
              <div className={classes.NiMH}/>
              <div className={classes.PPole}/>
            </div>
          </div>
        </div>
        <div className={classes.Content}>
          {checked}
          {open}
        </div>
      </div>
    )
};

export default versionParagraph;

