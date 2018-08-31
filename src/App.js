import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Provider store={createStore}>
        <Header />
      </Provider>
    );
  }
}

export default App;
