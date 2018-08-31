import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Header from './components/header';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene component={Header} key="StoreList" hideNavBar initial />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
