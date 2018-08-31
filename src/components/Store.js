import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';

const Store = ({ data }) => {
  const { title, image } = data;

  return (
    <Card>
      <Image
        source={{ uri: image }}
        style={{ height: 50, width: 50 }}
      />
      <Text>
        {title}
      </Text>
    </Card>
  );
};

export default Store;
