import React from 'react';
import classes from './SkillChip.css'
import Aux from '../../../hoc/AuxComponent/AuxComponent'

const skillChip = (props) => {
  const borderClass = props.last ? classes.SkillLast : classes.Skill
    return(
      <Aux>
        <div className={borderClass}><nobr>{props.skill}</nobr></div>
      </Aux>
    )
};

export default skillChip;
