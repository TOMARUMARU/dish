import * as React from 'react';
import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import { defaultCards, favoriteCards } from '../../actions';
import { List } from '../../components/common';

class FavoriteList extends Component {
  componentWillMount() {
    this.props.defaultCards();
  }

  listItems() {
    return this.props.favorites.map(favorite => (
      <List
        key={this.props.datas.data[favorite].title}
        data={this.props.datas.data[favorite]}
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

const styles = {
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
};

const mapStateToProps = ({ allCards, favoriteCardIds }) => {
  const { datas } = allCards;
  const favorites = favoriteCardIds;

  return { datas, favorites };
};

export default connect(
  mapStateToProps,
  {
    defaultCards,
    favoriteCards
  }
)(FavoriteList);
