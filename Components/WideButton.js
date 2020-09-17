import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../assets/colors';

export default WideButton = (props) => {
  return (
    <View style={props.containerStyle}>
      <TouchableOpacity
        disabled={props.disabled}
        onPress={props.onPress}
        style={[
          styles.button,
          { backgroundColor: props.disabled ? colors.gray : props.buttonColor }
        ]}
      >
        <Text style={[styles.text, { color: props.textColor }]}>
          {props.text}
        </Text>
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