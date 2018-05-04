import React from 'react';
import classes from './SkillChip.css'
import Aux from '../../../hoc/AuxComponent/AuxComponent'

const skillChip = (props) => {
  const borderClass = props.last ? classes.SkillLast : classes.Skill
    return(
      <Aux>
        <div style={{borderBottom: props.border ? '1px solid black' : 'none'}} className={borderClass}><nobr>{props.skill}</nobr></div>
      </Aux>
    )
};

export default skillChip;
