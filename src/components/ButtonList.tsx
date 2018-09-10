import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';
import { RootState } from '../reducer';
import { cardsSchema } from '../entities/cards/schema';
import { Card } from '../entities';

interface Props {
  cards: (Card | undefined)[];
}

class ButtonList extends PureComponent<Props> {
  favoritesListButton() {
    const favoriteCards = this.props.cards.filter(
      (card: any) => card.favorited == true
    );

    if (favoriteCards.length) {
      return (
        <TouchableOpacity onPress={Actions.FavoriteList}>
          <Button name="briefcase" color="red" />
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.buttonlistStyle}>
        <TouchableOpacity>
          <Button name="arrow-left" color="red" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Button name="x" color="gray" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Button name="thumbs-up" color="white" backgroundColor="pink" />
        </TouchableOpacity>

        {this.favoritesListButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonlistStyle: {
    marginTop: 640,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  }
});

const mapStateToProps = (state: RootState) => {
  const cards: Array<Card | undefined> = denormalize(
    Object.keys(state.entities.cards),
    cardsSchema,
    state.entities
  );
  return { cards };
};

export default connect(mapStateToProps)(ButtonList);
