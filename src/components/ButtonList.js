import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from './common';

const ButtonList = () => {
  const { buttonlistStyle } = styles;

  return (
    <View style={buttonlistStyle}>
      <TouchableOpacity>
        <Button name="arrow-left" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Button name="x" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Button name="thumbs-up" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Button name="briefcase" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonlistStyle: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  }
};

export default ButtonList;
