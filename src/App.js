import React, { Component } from 'react';
//import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import CellBuilder from './containers/CellBuilder/CellBuilder';

class App extends Component {

  render() {
      return(
          <Layout>
              <CellBuilder/>
          </Layout>
      );
  }
}


export default App;
