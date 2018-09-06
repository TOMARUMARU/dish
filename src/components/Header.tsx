import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
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
    alignSelf: 'center'
  },
  iconStyle: {
    fontSize: 20,
    opacity: 0.8
  }
});

const Header = () => {
  const { headerStyle, mainTextStyle, subTextStyle, iconStyle } = styles;

  return (
    <View style={headerStyle}>
      <View style={{ marginLeft: 20 }}>
        <Icon name="search" style={iconStyle} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={mainTextStyle}>気になるお店を右フリック！</Text>
        <Text style={subTextStyle}>残り890件</Text>
      </View>

      <View style={{ marginRight: 20 }}>
        <Icon name="settings" style={iconStyle} />
      </View>
    </View>
  );
};

export default Header;
