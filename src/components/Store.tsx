import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card } from './common';

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

const Store: React.SFC<Props> = props => {
  const { title, image, evaluation, number, movie, distance } = props.data;

  const {
    imageStyle,
    titleStyle,
    evaluationStyle,
    iconStyle,
    valueStyle,
    numberStyle,
    infoStyle,
    typeStyle,
    distanceStyle,
    textStyle
  } = styles;

  return (
    <Card>
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

      <View>
        <Text style={textStyle}>Powered by TOMARUMARU</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 450,
    width: 300
  },
  titleStyle: {
    fontSize: 30,
    marginTop: 12,
    marginLeft: 20
  },
  evaluationStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20
  },
  iconStyle: {
    fontSize: 19,
    color: 'red'
  },
  valueStyle: {
    fontSize: 19,
    marginRight: 5,
    marginLeft: 5
  },
  numberStyle: {
    fontSize: 19,
    opacity: 0.8
  },
  infoStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20
  },
  typeStyle: {
    fontSize: 17,
    opacity: 0.8,
    marginRight: 5
  },
  distanceStyle: {
    fontSize: 17,
    opacity: 0.8
  },
  textStyle: {
    fontSize: 10,
    opacity: 0.6,
    alignSelf: 'center',
    marginTop: 20
  }
});

export default Store;
