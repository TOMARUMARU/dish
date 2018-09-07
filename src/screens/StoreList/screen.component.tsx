import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Header from '../../components/Header';
import Store from '../../components/Store';
import ButtonList from '../../components/ButtonList';
import { Card } from '../../entities';

export interface StateProps {
  datas: Card | null;
  // favorites: number[];
  isRequesting: boolean;
}

export interface DispatchProp {
  onFetchDefaultCards: () => void;
  // favoriteCards: () => void;
}

type Props = StateProps & DispatchProp;

export default class StoreList extends PureComponent<Props> {
  componentWillMount() {
    // this.props.onFetchDefaultCards();
  }

  renderSwiper() {
    if (this.props.datas) {
      return (
        <Swiper
          cards={this.props.datas}
          renderCard={this.renderCard}
          marginTop={100}
          cardVerticalMargin={0}
          backgroundColor="#E9E9EF"
          onSwipedRight={(cardIndex: number) => {
            // this.props.favoriteCards(cardIndex);
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
        {this.props.isRequesting ? <ActivityIndicator /> : this.renderSwiper()}
        <ButtonList />
      </View>
    );
  }
}
