import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Card {
  title: string;
  image: string;
  evaluation: number;
  number: number;
  favorited: boolean;
  movie: {
    id: number;
    type: string;
  };
  distance: string;
}

interface Props {
  data: Card;
}

const List: React.SFC<Props> = props => {
  const { title, image, evaluation, number, movie, distance } = props.data;

  const {
    listStyle,
    imageStyle,
    titleStyle,
    evaluationStyle,
    iconStyle,
    valueStyle,
    numberStyle,
    infoStyle,
    typeStyle,
    distanceStyle
  } = styles;

  return (
    <View style={listStyle}>
      <Image source={{ uri: image }} style={imageStyle} />

      <Text style={titleStyle}>{title}</Text>

      <View style={evaluationStyle}>
        <Icon name="star" style={iconStyle} />
        <Icon name="star" style={iconStyle} />
        <Icon name="star" style={iconStyle} />
        <Icon name="star" style={iconStyle} />
        <Icon name="star" style={iconStyle} />

        <Text style={valueStyle}>{evaluation}</Text>

        <Text style={numberStyle}>({number})</Text>
      </View>

      <View style={infoStyle}>
        <Text style={typeStyle}>{movie.type}</Text>

        <Text style={distanceStyle}>{distance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginRight: 35,
    marginLeft: 35,
    marginBottom: 35,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: 'white'
  },
  imageStyle: {
    height: 330,
    width: 300
  },
  titleStyle: {
    fontSize: 20,
    marginTop: 12,
    marginLeft: 5
  },
  evaluationStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5
  },
  iconStyle: {
    fontSize: 14,
    color: 'red'
  },
  valueStyle: {
    fontSize: 14,
    marginRight: 5,
    marginLeft: 5
  },
  numberStyle: {
    fontSize: 14,
    opacity: 0.8
  },
  infoStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5
  },
  typeStyle: {
    fontSize: 14,
    opacity: 0.8,
    marginRight: 5
  },
  distanceStyle: {
    fontSize: 14,
    opacity: 0.8
  }
});
export { List };
