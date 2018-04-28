import React from 'react';
import classes from './CarouselItem.css'

const carouselItem = (props) => {
  const appliedClasses = props.active ? classes.Active : classes.Inactive
    return (
      <div className={[classes.Item, appliedClasses].join(' ')} style={{order: props.order+''}}>
        <div className={classes.Header}>'POS' + {props.pos}, 'INDEX' {props.id}</div>
        <div className={classes.BtBox}>
          <div className={classes.Bt}>
            43
          </div>
          <div className={classes.CctLogo}/>
        </div>
      </div>
    )
};

export default carouselItem;