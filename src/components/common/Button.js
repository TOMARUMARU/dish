import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Button = ({ name, color }) => {
  const { buttonStyle } = styles;

  return (
    <View style={buttonStyle}>
      <Icon
        name={name}
        style={{ color, fontSize: 20 }}
      />
    </View>
  );
};


const styles = {
  buttonStyle: {
    marginTop: 5,
    marginRight: 40,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { wiedh: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export { Button };
