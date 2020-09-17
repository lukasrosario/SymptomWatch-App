import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const WideButton = (props) => {
  return (
    <View style={props.containerStyle}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.button, props.buttonColor]}
      >
        <Text style={[styles.text, props.textColor]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 275,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  text: {
    fontWeight: '300',
    fontSize: 20
  }
});

export default WideButton;
