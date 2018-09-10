import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Header from '../../components/Header';
import Store from '../../components/Store';
import ButtonList from '../../components/ButtonList';
import { Card } from '../../entities';

export interface StateProps {
  isRequesting: boolean;
  cards: (Card | undefined)[];
}

export interface DispatchProp {
  onFetchDefaultCards: () => void;
  addFavoriteCards: (cardIndex: number) => void;
}

type Props = StateProps & DispatchProp;

export default class StoreList extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    this.props.onFetchDefaultCards();
  }

  renderSwiper() {
    if (this.props.cards) {
      return (
        <Swiper
          cards={this.props.cards}
          renderCard={this.renderCard}
          marginTop={100}
          cardVerticalMargin={0}
          backgroundColor="#E9E9EF"
          onSwipedRight={(cardIndex: number) => {
            this.props.addFavoriteCards(cardIndex);
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
    distance: string;
    favorited: boolean;
    movie: {
      id: number;
      type: string;
    };
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
