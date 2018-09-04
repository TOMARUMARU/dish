import React from 'react';
import { View, Text, Image } from 'react-native';

const List = ({ data }) => {
  const { listStyle } = styles;
  const {
    title,
    image,
    evaluation,
    number,
    type,
    distance
  } = data;

  return (
    <View style={listStyle}>
      <Image
        source={{ uri: image }}
      />
      <Text>{title}</Text>
      <Text>{evaluation}</Text>
      <Text>({number})</Text>
      <Text>{type}</Text>
      <Text>{distance}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  listStyle: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
};
export { List };
