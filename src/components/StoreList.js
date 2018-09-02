import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { cardDisplayed } from '../actions';
import Swiper from 'react-native-deck-swiper';
import Header from './Header';
import Store from './Store';
import ButtonList from './ButtonList';

class StoreList extends Component {
  state={ datas: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/dish')
      .then(response => this.setState({ datas: response.data }));
  }

  swipedCard(index) {
    this.props.cardDisplayed({ id: index });
  }

  renderCard = data => {
    return (
      <Store key={data.title} data={data} />
    );
  }

  render() {
    return (
      <View>
        <Header />

        <Swiper
          cards={this.state.datas}
          renderCard={this.renderCard}
          marginTop={100}
          cardVerticalMargin={0}
          backgroundColor='#E9E9EF'
          onSwiped={(cardIndex) => { this.swipedCard(cardIndex); }}
        />

        <ButtonList />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { id } = state.displayedCardId;

  return { id };
};

export default connect(mapStateToProps, { cardDisplayed })(StoreList);
