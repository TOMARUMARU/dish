import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Store from './Store';

class StoreList extends Component {
  render() {
    return (
      <View>
        <Header />
        <Store />
      </View>
    );
  }
}

export default StoreList;
