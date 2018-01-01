import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Cell from './containers/CellBuilder/CellBuilder';

class App extends Component {

  render() {
      return(
          <Layout>
              <Switch>
                  <Route path="/somePerson" component={Cell}/>
                  <Route path="/" component={Cell}/>
              </Switch>
          </Layout>
      );
  }
}


export default App;
