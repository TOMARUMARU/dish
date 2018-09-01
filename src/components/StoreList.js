import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
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

  renderCard = data => {
    return (
      <Store key={data.title} data={data} />
    );
  }

  render() {
    return (
      <ScrollView>
        <Header />
        <Swiper
          cards={this.state.datas}
          renderCard={this.renderCard}
        />
        <ButtonList />
      </ScrollView>
    );
  }
}

export default StoreList;
