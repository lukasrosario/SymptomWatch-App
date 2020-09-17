import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import FloatingInput from '../Components/FloatingInput';
import WideButton from '../Components/WideButton';

import { colors } from '../assets/colors';

export default Welcome = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  async function submitPhone() {
    const currentUser = auth().currentUser;
    try {
      await firestore().collection('Users').add({
        name: currentUser.displayName,
        email: currentUser.email,
        phoneNumber: phoneNumber
      });
      props.navigation.navigate('app');
    } catch (error) {
      alert('There was an error');
      setPhoneNumber('');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Symptom Watch!</Text>
          <View>
            <Text style={styles.prompt}>
              Enter your phone number below to get started.
            </Text>
            <FloatingInput
              label="Phone Number"
              value={phoneNumber}
              onChangeText={(text) => {
                setPhoneNumber(text.replace(/[^0-9]/g, ''));
              }}
              autoCapitalize="none"
              labelColor={colors.secondary}
              inputStyle={styles.inputStyle}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <WideButton
            onPress={() => submitPhone()}
            buttonColor={colors.secondary}
            textColor={colors.primary}
            disabled={!(phoneNumber.length == 10)}
          >
            Continue
          </WideButton>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 64
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
    color: colors.secondary
  },
  prompt: {
    fontSize: 24,
    color: colors.secondary,
    marginBottom: 24
  },
  inputStyle: {
    width: 300,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 1,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    opacity: 0.9,
    color: colors.secondary,
    marginBottom: 16
  }
});
