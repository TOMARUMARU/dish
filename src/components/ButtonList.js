import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from './common';

const ButtonList = () => {
  const { buttonlistStyle } = styles;

  return (
    <View style={buttonlistStyle}>
      <TouchableOpacity>
        <Button
          name="arrow-left"
          color="red"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Button
          name="x"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Button
          name="thumbs-up"
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Button
          name="briefcase"
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonlistStyle: {
    marginTop: 640,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  }
};

export default ButtonList;
