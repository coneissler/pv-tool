import React, { Component } from 'react';
import classes from './App.css'
import {connect} from 'react-redux';
import * as actionTypes from './store/actions/actions'

class App extends Component {
    state={
        value: 'a2'
    };

    onChangeHandler = (event) => {
        this.setState({
            value: event.target.value
        })


    };

  render() {
      return(
          <div className={classes.Wrapper}>
              <p className={classes.Header}><strong>PV-Tool</strong><br></br>
                  <i style={{fontSize: '30px'}}>!!under construction!!</i>
              </p>
              <form><input value={this.state.value} onChange={(event) => this.onChangeHandler(event)}/></form>
              <button onClick={() => this.props.enableElement('p' , 1)}>ENABLE ELEMENT</button>
              <button onClick={() => this.props.disableElement('p', 1)}>DISABLE ELEMENT</button>
              <button onClick={() => this.props.toggleElement('p', 1)}>TOGGLE ELEMENT</button>
          </div>

      );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        enableElement: (el, size) => dispatch ({type: actionTypes.ENABLE_ELEMENT, element: el, size: size}),
        disableElement: (el, size) => dispatch ({type: actionTypes.DISABLE_ELEMENT, element: el, size: size}),
        toggleElement: (el, size) => dispatch ({type: actionTypes.TOGGLE_ELEMENT, element: el, size: size})

    };

};

export default connect(null, mapDispatchToProps)(App);
