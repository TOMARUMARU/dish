import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { favoriteCards } from '../actions';
import { Button } from './common';

class ButtonList extends Component<{ favorites: [] }> {
  favoritesListButton() {
    if (this.props.favorites.length) {
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

const mapStateToProps = state => {
  const favorites = state.favoriteCardIds;

  return { favorites };
};

export default connect(
  mapStateToProps,
  { favoriteCards }
)(ButtonList);
