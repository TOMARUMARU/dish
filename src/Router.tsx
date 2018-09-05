import * as React from 'react'
import React from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import StoreList from './screens/StoreList/screen.component';
import FavoriteList from './screens/FavoriteList/screen.component';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Modal hideNavBar>
          <Scene key="main">
            <Scene component={StoreList} key="StoreList" hideNavBar initial />
          </Scene>
          <Scene component={FavoriteList} key="FavoriteList" />
        </Modal>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
