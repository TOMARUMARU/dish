import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Header from './Header';
import Store from './Store';

class StoreList extends Component {
  componentWillMount() {
    axios.get('http://localhost:3000/dish')
      .then(response => console.log(response));
  }

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
