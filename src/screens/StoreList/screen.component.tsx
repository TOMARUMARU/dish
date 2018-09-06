import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import { defaultCards, favoriteCards } from '../../actions';
import Header from '../../components/Header';
import Store from '../../components/Store';
import ButtonList from '../../components/ButtonList';
import { RootState } from '../../reducer';

interface Props {
  datas: {
    data: {};
  };
}

class StoreList extends PureComponent<Props> {
  componentWillMount() {
    this.props.defaultCards();
  }

  renderSwiper() {
    if (this.props.datas) {
      return (
        <Swiper
          cards={this.props.datas.data}
          renderCard={this.renderCard}
          marginTop={100}
          cardVerticalMargin={0}
          backgroundColor="#E9E9EF"
          onSwipedRight={(cardIndex: number) => {
            this.props.favoriteCards(cardIndex);
          }}
        />
      );
    }
  }

  renderCard = (data: {
    title: string;
    image: string;
    evaluation: number;
    number: number;
    type: string;
    distance: string;
  }) => {
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

const mapStateToProps = (state: RootState) => {
  const { datas } = state.allCards;
  const favorites = state.favoriteCardIds;

  return { datas, favorites };
};

export default connect(
  mapStateToProps,
  {
    defaultCards,
    favoriteCards
  }
)(StoreList);
