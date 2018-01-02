import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import CellBuilder from './containers/CellBuilder/CellBuilder';

class App extends Component {

  render() {
      return(
          <Layout>
              <Switch>
                  <Route path="/somePerson" component={CellBuilder}/>
                  <Route path="/" component={CellBuilder}/>
              </Switch>
          </Layout>
      );
  }
}


export default App;
