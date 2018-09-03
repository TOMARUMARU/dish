import React, { Component } from 'react';
import { List } from './common';

class FavoriteList extends Component {
  render() {
    return (
      <List>
        {this.props.children}
      </List>
    );
  }
}

export default FavoriteList;
