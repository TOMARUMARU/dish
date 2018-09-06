import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  name: string;
  color: string;
  backgroundColor?: string;
}

const Button: React.SFC<Props> = props => {
  return (
    <View
      style={[
        styles.buttonStyle,
        props.backgroundColor
          ? { backgroundColor: props.backgroundColor }
          : null
      ]}
    >
      <Icon name={props.name} style={{ color: props.color, fontSize: 20 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 5,
    marginRight: 40,
    marginLeft: 5,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});

export { Button };
