import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Header from './Header';
import Store from './Store';
import ButtonList from './ButtonList';

class StoreList extends Component {
  state={ datas: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/dish')
      .then(response => this.setState({ datas: response.data }));
  }

  renderStores() {
    return this.state.datas.map(data =>
      <Store key={data.title} data={data} />
    );
  }

  render() {
    return (
      <ScrollView>
        <Header />
        {this.renderStores()}
        <ButtonList />
      </ScrollView>
    );
  }
}

export default StoreList;
