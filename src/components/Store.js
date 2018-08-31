import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';

const Store = ({ data }) => {
  const { imageStyle, titleStyle } = styles;

  const { title, image } = data;

  return (
    <Card>
      <Image
        source={{ uri: image }}
        style={imageStyle}
      />
      <Text style={titleStyle}>
        {title}
      </Text>
    </Card>
  );
};

const styles = {
  imageStyle: {
    height: 450,
    width: 333
  },
  titleStyle: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10
  }
};

export default Store;
