import React from 'react';
import classes from './Bulletpoint.css'

const bulletpoint = (props) => {
    return(
      <div className={classes.Box}>
        <div className={classes.Checkbox}>
          <svg width='80%' height='80%' id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
            <circle cx='25' cy='25' r='24' fill='transparent' stroke='white' />
            <polyline points='38,15 22,33 12,25' fill='none' stroke={props.checked ? '#ffff' : 'transparent'} strokeWidth='1'
                    strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' />
          </svg>
        </div>
        <div className={classes.Text}>{props.task}</div>
      </div>
    )
};

export default bulletpoint;