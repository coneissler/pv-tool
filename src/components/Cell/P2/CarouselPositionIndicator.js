import React from 'react'
import classes from './CarouselPositionIndicator.css'

const carouselPositionIndicator = (props) => {
    const appliedClass = props.active ? classes.Active : classes.Disabled
    const width = (100 / props.total)*0.8

    return(
      <div style={{width: '10%'}} onClick={props.click} className={[classes.Indicator, appliedClass].join(' ')}/>
    )
}

export default carouselPositionIndicator