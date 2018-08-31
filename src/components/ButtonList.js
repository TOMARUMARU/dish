import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from './common';

const ButtonList = () => {
  return (
    <View>
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

export default ButtonList;
