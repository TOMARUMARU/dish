import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import { defaultCards, favoriteCards } from '../../actions';
import { List } from '../../components/common';
import { RootState } from '../../reducer';

interface Props {
  defaultCards: Function;
  favorites: number[];
  datas: {
    data: [
      {
        title: string;
        image: string;
        evaluation: number;
        number: number;
        type: string;
        distance: string;
      }
    ];
  };
}

class FavoriteList extends PureComponent<Props> {
  componentWillMount() {
    this.props.defaultCards();
  }

  listItems() {
    return this.props.favorites.map(favorite => (
      <List
        key={this.props.datas.data[favorite].title}
        data={this.props.datas.data[favorite]}
      />
    ));
  }

  render() {
    const { cancelStyle, xStyle, listStyle } = styles;

    return (
      <View>
        <View style={cancelStyle}>
          <TouchableOpacity onPress={Actions.pop}>
            <Icon name="x" style={xStyle} />
          </TouchableOpacity>
        </View>

        <ScrollView style={listStyle}>{this.listItems()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cancelStyle: {
    marginTop: 60,
    marginRight: 30,
    marginBottom: 30,
    alignSelf: 'flex-end'
  },
  xStyle: {
    fontSize: 30
  },
  listStyle: {
    flexDirection: 'row'
  }
});

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
)(FavoriteList);
