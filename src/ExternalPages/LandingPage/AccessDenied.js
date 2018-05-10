import React, {Component} from 'react';
import classes from './AccessDenied.css'

const messages = ['Click anywhere to be redirected.', 'Or don\'t.', 'I don\'t care. :)']

class AccessDenied extends Component{
  constructor(props) {
    super(props)
    this.state = {
      text: 'This page can only be accessed via the CCT-Dashboard'
    }
    setTimeout(() => this.changeText(0), 6000);
    setTimeout(() => this.changeText(1), 20000);
    setTimeout(() => this.changeText(2), 22000);
  }

  changeText = (index) => {
    this.setState({
      text: messages[index]
    })
  }
  render() {
    return(
      <a href="https://board.cct-ev.de/index.php/pv-tool">
        <div className={classes.Container}>
          <iframe src="https://giphy.com/embed/8F9zV1eCATGrRqPHxE" frameBorder="0" allowFullScreen/>
          <p>{this.state.text}</p>
        </div>
      </a>
    )}
}

export default AccessDenied;