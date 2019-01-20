import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Home from './components/Home';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact={true} path="/" render={(props) =>
                  <Home  /> } />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions) (App);
