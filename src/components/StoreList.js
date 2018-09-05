import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { defaultCards, cardDisplayed, favoriteCards } from '../actions';
import Swiper from 'react-native-deck-swiper';
import Header from './Header';
import Store from './Store';
import ButtonList from './ButtonList';

class StoreList extends Component {
  componentWillMount() {
    this.props.defaultCards();
  }

  swipedCard(index) {
    this.props.cardDisplayed({ id: index + 2 });
  }

  renderSwiper() {
    if (this.props.datas) {
      return (
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          cards={this.props.datas.data}
          renderCard={this.renderCard}
          marginTop={100}
          cardVerticalMargin={0}
          backgroundColor='#E9E9EF'
          onSwiped={(cardIndex) => { this.swipedCard(cardIndex); }}
          onSwipedRight={(cardIndex) => { this.props.favoriteCards(cardIndex); }}
        />
      );
    }
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

        {this.renderSwiper()}

        <ButtonList
          id={this.props.id}
          swiper={this.swiper}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ allCards, displayedCardId, favoriteCardIds }) => {
  const { datas } = allCards;
  const { id } = displayedCardId;
  const favorites = favoriteCardIds;

  return { datas, id, favorites };
};

export default connect(mapStateToProps, {
   defaultCards, cardDisplayed, favoriteCards
})(StoreList);
