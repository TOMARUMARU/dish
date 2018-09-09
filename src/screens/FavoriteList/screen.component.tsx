import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import { List } from '../../components/common';
import { Card } from '../../entities';
import { cardsSchema } from '../../entities/cards/schema';

export interface StateProps {
  cards: (Card | undefined)[];
}

type Props = StateProps;

export default class FavoriteList extends PureComponent<Props> {
  listItems() {
    const favoriteCards = this.props.cards.filter(
      card => card.favorited == true
    );
    return favoriteCards.map(favoriteCard => (
      <List key={favoriteCard.title} data={favoriteCard} />
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
