import React from 'react';
import classes from './CarouselItem.css'

const carouselItem = (props) => {
  const appliedClasses = props.active ? classes.Active : classes.Inactive
    return (
      <div className={[classes.Item, appliedClasses].join(' ')} style={{order: props.order+''}}>
        <div className={classes.Header}
             style={{fontSize: props.project.name.length > 35 ? '80%' : '100%'}}>
          {props.project.name}
          <div className={classes.StatusIndicator} style={{background: 'linear-gradient(45deg, white, white 50%, ' + props.project.completed}}/>
          </div>
        <div className={classes.Client} style={{fontSize: props.project.client.length > 30 ? '80%' : '100%'}}>{props.project.client}</div>
        <div className={classes.Bt}>{props.project.bt} BT</div>
        <div className={classes.Stats}>{props.project.projectTyp}</div>
        <div className={classes.Bt}>{props.project.position}</div>
      </div>
    )
}

export default carouselItem
