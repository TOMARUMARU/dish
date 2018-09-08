import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import { List } from '../../components/common';
import { Card } from '../../entities';

export interface StateProps {
  datas: Card[];
  favorites: number[];
}

type Props = StateProps;

export default class FavoriteList extends PureComponent<Props> {
  listItems() {
    return this.props.favorites.map(favorite => (
      <List
        key={this.props.datas[favorite].title}
        data={this.props.datas[favorite]}
      />
    ));
  }

  render() {
    const { cancelStyle, xStyle, listStyle } = styles;

    return (
      <View>
        <View style={cancelStyle}>
          <TouchableOpacity onPress={Actions.pop}>
            <Icon name="x" style={xStyle} />
          </TouchableOpacity>
        </View>

        <ScrollView style={listStyle}>{this.listItems()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cancelStyle: {
    marginTop: 60,
    marginRight: 30,
    marginBottom: 30,
    alignSelf: 'flex-end'
  },
  xStyle: {
    fontSize: 30
  },
  listStyle: {
    flexDirection: 'row'
  }
});
