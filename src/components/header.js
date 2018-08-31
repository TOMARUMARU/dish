import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  const { headerStyle, mainTextStyle, subTextStyle } = styles;

  return (
    <View style={headerStyle}>
      <View>
        <Icon
          name={'search'}
        />
      </View>

      <View>
        <Text style={mainTextStyle}>
          気になるお店を右フリック！
        </Text>
        <Text style={subTextStyle}>
          残り890件
        </Text>
      </View>

      <View>
        <Icon
          name={'settings'}
        />
      </View>
    </View>
  );
};

const styles = {
  headerStyle: {
    marginTop: 60,
    alignItems: 'center'
  },
  mainTextStyle: {
    fontSize: 15
  },
  subTextStyle: {
    fontSize: 12,
    opacity: 0.7
  }
};

export default Header;
