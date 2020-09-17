import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import FloatingInput from '../Components/FloatingInput';
import WideButton from './../Components/WideButton';
import { colors } from './../assets/colors';

const logo = require('../assets/img/logo-transparent.png');

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.watchContainer}>
            <Text style={styles.watch}>Symptom Watch</Text>
          </View>
          <View style={styles.inputsContainer}>
            <FloatingInput
              label="Email"
              value={this.state.email}
              onChangeText={(email) => {
                this.setState({ email });
              }}
              autoCapitalize="none"
              labelColor={colors.primary}
              inputStyle={styles.inputStyle}
            />
            <FloatingInput
              label="Password"
              value={this.state.password}
              onChangeText={(password) => {
                this.setState({ password });
              }}
              autoCapitalize="none"
              secureTextEntry={true}
              labelColor={colors.primary}
              inputStyle={styles.inputStyle}
            />
            <WideButton
              onPress={() => alert('nice')}
              text="Sign Up"
              containerStyle={styles.buttonContainer}
              buttonColor={{ backgroundColor: colors.primary }}
              textColor={{ color: colors.secondary }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingTop: 75
  },
  logo: {
    position: 'absolute',
    width: '100%',
    opacity: 0.5,
    top: 25
  },
  watchContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    top: 150
  },
  watch: {
    fontSize: 36,
    textAlign: 'center',
    color: colors.primary
  },
  inputsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  inputStyle: {
    width: 300,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 1,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderColor: colors.primary,
    opacity: 0.9,
    color: colors.primary,
    marginBottom: 16
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 36
  }
});
