import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Home from './components/Home';
import List from './components/List';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact={true} path="/" render={(props) =>
                  <Home  /> } />
            <Route exact={true} path="/saved" render={(props) =>
                  <List  /> } />      
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions) (App);
