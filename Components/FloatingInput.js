import React, { Component } from 'react';
import { View, TextInput, Animated } from 'react-native';

export default class FloatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
    this._animatedIsFocused = new Animated.Value(
      this.props.value === '' ? 0 : 1
    );
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      fontWeight: '300',
      color: this.props.labelColor,
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [30, 0]
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14]
      })
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={this.props.inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}
