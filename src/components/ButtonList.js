import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { favoriteCards } from '../actions';
import { Button } from './common';

class ButtonList extends Component {

  onGoodPress() {
    this.props.swiper.swipeRight(false);
    this.props.favoriteCards(this.props.id);
  }

  render() {
    return (
      <View style={styles.buttonlistStyle}>
        <TouchableOpacity>
          <Button
            name="arrow-left"
            color="red"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Button
            name="x"
            color="gray"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onGoodPress.bind(this)}>
          <Button
            name="thumbs-up"
            color="white"
            backgroundColor="pink"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Button
            name="briefcase"
            color="red"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  buttonlistStyle: {
    marginTop: 640,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  }
};

const mapStateToProps = state => {
  const favorites = state.favoriteCards;

  return { favorites };
};

export default connect(mapStateToProps, { favoriteCards })(ButtonList);
