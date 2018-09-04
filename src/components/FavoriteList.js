import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { defaultCards, favoriteCards } from '../actions';
import { List } from './common';

class FavoriteList extends Component {
  componentWillMount() {
    this.props.defaultCards();
  }

  listItems() {
    return this.props.favorites.map(favorite =>
      <List key={this.props.datas.data[favorite].title} data={this.props.datas.data[favorite]} />
    );
  }

  render() {
    const { containerStyle, cancelStyle, listStyle } = styles;

    return (
      <View style={containerStyle}>
        <View style={cancelStyle}>
          <Text>❌</Text>
        </View>

        <ScrollView style={listStyle}>
          {this.listItems()}
        </ScrollView>
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
  },
  listStyle: {
    flexDirection: 'row',
    width: 400
  }
};

const mapStateToProps = ({ allCards, favoriteCardIds }) => {
  const { datas } = allCards;
  const favorites = favoriteCardIds;

  return { datas, favorites };
};

export default connect(mapStateToProps, {
   defaultCards, favoriteCards
})(FavoriteList);
