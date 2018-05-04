import React, {Component} from 'react';
import classes from './LandingPage.css'
import demoThumb from '../../assets/demoThumb.png'
import roadmapThumb from '../../assets/roadmapThumb.jpeg'
class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      hover: [false, false]
    }
  }

  hoverHandler = (index) => {
    const newState = this.state.hover.slice()
    newState[index] = !this.state.hover[index]
    newState[(index+1) % 2] = false
    this.setState({hover: newState})
  }

    render(){
        return(
          <div>
            <div className={classes.Background}/>
            <div className={classes.PV}>PV</div>
            <div className={classes.Tool}>Tool</div>
            <div className={classes.ButtonContainer}>
              <div className={classes.Item} onMouseEnter={() => this.hoverHandler(0)} onMouseLeave={() => this.hoverHandler(0)}
              onClick={() => this.props.history.push('/demo')}>
                <img className={this.state.hover[0] ? classes.ImageHover : classes.Image} src={demoThumb}/>
                <div className={this.state.hover[0] ? classes.ItemCaptionHover : classes.ItemCaption} >Demo</div>
              </div>
              <div className={classes.Item} onMouseEnter={() => this.hoverHandler(1)} onMouseLeave={() => this.hoverHandler(1)}
                   onClick={() => this.props.history.push('/roadmap')}>
                <img className={this.state.hover[1] ? classes.ImageHover : classes.Image} src={roadmapThumb}/>
                <div className={this.state.hover[1] ? classes.ItemCaptionHover : classes.ItemCaption} >Roadmap</div>
              </div>
            </div>
            <div className={classes.Impressum}>Copyright © 2018 Company Consulting Team</div>
          </div>

        );
    }
}

export default LandingPage;