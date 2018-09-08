import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { Actions } from 'react-native-router-flux';
import { favoriteActions } from '../action';
import { Button } from './common';
import { RootState } from '../reducer';

interface Props {
  favorites: number[];
}

class ButtonList extends PureComponent<Props> {
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

const mapStateToProps = (state: RootState) => {
  const { favorites } = state.screens.favoriteList;

  return { favorites };
};

export default connect(mapStateToProps)(ButtonList);
