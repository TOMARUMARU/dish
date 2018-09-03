import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List } from './common';

class FavoriteList extends Component {
  render() {
    const { containerStyle, cancelStyle } = styles;
    
    return (
      <View style={containerStyle}>
        <View style={cancelStyle}>
          <Text>❌</Text>
        </View>
        <List>
          {this.props.children}
        </List>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'white'
  },
  cancelStyle: {
    marginTop: 60,
    marginRight: 30,
    marginBottom: 30,
    alignSelf: 'flex-end'
  }
};

export default FavoriteList;
