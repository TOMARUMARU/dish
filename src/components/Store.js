import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';

const Store = ({ data }) => {
  const { title, image } = data;

  return (
    <Card>
      <Image
        source={{ uri: image }}
        style={{ height: 450, width: 333 }}
      />
      <Text>
        {title}
      </Text>
    </Card>
  );
};

export default Store;
