import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ThinButton = (props) => {
  return (
    <View style={props.containerStyle}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.button, { backgroundColor: props.buttonColor }]}
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 12
  },
  text: {
    fontWeight: '300',
    fontSize: 20
  }
});
