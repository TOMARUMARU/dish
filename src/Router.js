import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import StoreList from './components/StoreList';
import FavoriteList from './components/FavoriteList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene component={StoreList} key="StoreList" hideNavBar initial />
        </Scene>
        <Scene key="sub">
          <Scene component={FavoriteList} key="FavoriteList" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
