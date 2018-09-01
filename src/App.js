import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <Provider store={createStore}>
        <Router />
      </Provider>
    );
  }
}

export default App;
