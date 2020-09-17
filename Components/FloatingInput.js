import React, { useState, useEffect } from 'react';
import { View, TextInput, Animated } from 'react-native';

export default FloatingInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const _animatedIsFocused = new Animated.Value(props.value === '' ? 0 : 1);

  useEffect(() => {
    Animated.timing(_animatedIsFocused, {
      toValue: isFocused || props.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  });

  const labelStyle = {
    position: 'absolute',
    fontWeight: '300',
    color: props.labelColor,
    left: 0,
    top: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 0]
    }),
    fontSize: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14]
    })
  };
  return (
    <View style={{ paddingTop: 18 }}>
      <Animated.Text style={labelStyle}>{props.label}</Animated.Text>
      <TextInput
        {...props}
        style={props.inputStyle}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        blurOnSubmit
      />
    </View>
  );
};
