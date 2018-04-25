import React from 'react';
import classes from './SkillChip.css'
import Aux from '../../../hoc/AuxComponent/AuxComponent'

const skillChip = (props) => {
  const color1 = props.id % 2 === 0 ? '#b0b0b0' : 'lightgrey'
  const color2 = props.id % 2 === 0 ? 'lightgrey' : '#b0b0b0'
  const divider = props.last ? null : <div style={{background: 'linear-gradient(to left top, '+color1+' 49%, '+color2+' 50%)'}} className={classes.Divider}/>
    return(
      <Aux>
        <div style={{background: color2}} className={classes.Skill}><nobr>{props.skill}</nobr></div>
        {divider}
      </Aux>
    )
};

export default skillChip;
