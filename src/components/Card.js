import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 600,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  }
};

export default Card;
