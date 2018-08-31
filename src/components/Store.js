import React from 'react';
import { View, Text } from 'react-native';

const Store = ({ data }) => {
  const { title, image } = data;

  return (
    <View>
      <Text>
        {title}
        {image}
      </Text>
    </View>
  );
};

export default Store;
