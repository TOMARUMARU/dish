import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  const { headerStyle, mainTextStyle, subTextStyle, iconStyle } = styles;

  return (
    <View style={headerStyle}>
      <View style={{ marginLeft: 10 }}>
        <Icon
          name={'search'}
          style={iconStyle}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={mainTextStyle}>
          気になるお店を右フリック！
        </Text>
        <Text style={subTextStyle}>
          残り890件
        </Text>
      </View>

      <View style={{ marginRight: 10 }}>
        <Icon
          name={'settings'}
          style={iconStyle}
        />
      </View>
    </View>
  );
};

const styles = {
  headerStyle: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTextStyle: {
    fontSize: 15,
    alignSelf: 'center'
  },
  subTextStyle: {
    fontSize: 12,
    opacity: 0.7,
    alignSelf: 'center',
  },
  iconStyle: {
    fontSize: 20,
    opacity: 0.8
  }
};

export default Header;
