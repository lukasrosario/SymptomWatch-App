import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../assets/colors';

export default WideButton = ({
  containerStyle,
  disabled,
  onPress,
  buttonColor,
  textColor,
  children
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.button,
          { backgroundColor: disabled ? colors.gray : buttonColor }
        ]}
      >
        <Text style={[styles.text, { color: textColor }]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 86,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  text: {
    fontWeight: '300',
    fontSize: 20
  }
});
