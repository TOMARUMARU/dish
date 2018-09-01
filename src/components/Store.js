import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ButtonList from './ButtonList';
import { Card } from './common';

const Store = ({ data }) => {
  const { title, image, evaluation, number, type, distance } = data;

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
    <View>
      <Card>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />

        <Text style={titleStyle}>
          {title}
        </Text>

        <View style={evaluationStyle}>
          <Icon name='star' style={iconStyle} />
          <Icon name='star' style={iconStyle} />
          <Icon name='star' style={iconStyle} />
          <Icon name='star' style={iconStyle} />
          <Icon name='star' style={iconStyle} />

          <Text style={valueStyle}>
            {evaluation}
          </Text>

          <Text style={numberStyle}>
            ({number})
          </Text>
        </View>

        <View style={infoStyle}>
          <Text style={typeStyle}>
            {type}
          </Text>

          <Text style={distanceStyle}>
            {distance}
          </Text>
        </View>

        <View>
          <Text style={textStyle}>
            Powered by FOURSQUARE
          </Text>
        </View>
      </Card>

      <ButtonList />
    </View>
  );
};

const styles = {
  imageStyle: {
    height: 450,
    width: 333
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
};

export default Store;
