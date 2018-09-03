import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const List = () => {
  const { containerStyle, listStyle } = styles;

  return (
    <ScrollView style={containerStyle}>
      <View style={listStyle}>
        <Text>hogehogehogehogehoge</Text>
        <Text>hoge</Text>
        <Text>hoge</Text>
        <Text>hoge</Text>
        <Text>hoge</Text>
        <Text>hoge</Text>

      </View>
      <View style={listStyle}>
        <Text>hoge</Text>
        <Text>hoge</Text>
      </View>
    </ScrollView>
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
