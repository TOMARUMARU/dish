import * as React from "react";
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { defaultCards, favoriteCards } from "../../actions";
import Header from "../../components/Header";
import Store from "../../components/Store";
import ButtonList from "../../components/ButtonList";

class StoreList extends Component {
  componentWillMount() {
    this.props.defaultCards();
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
          backgroundColor="#E9E9EF"
          onSwipedRight={cardIndex => {
            this.props.favoriteCards(cardIndex);
          }}
        />
      );
    }
  }

  renderCard = data => {
    return <Store key={data.title} data={data} />;
  };

  render() {
    return (
      <View>
        <Header />

        {this.renderSwiper()}

        <ButtonList />
      </View>
    );
  }
}

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
)(StoreList);
