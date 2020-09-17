import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import ThinButton from '../Components/ThinButton';

import { colors } from '../assets/colors';

export default History = () => {
  const createLogout = () => {
    Alert.alert('Are you sure you want to log out?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => auth().signOut() }
    ]);
  };

  return (
    <View style={styles.container}>
      <ThinButton
        containerStyle={styles.logoutContainer}
        buttonColor={colors.primary}
        textColor={colors.secondary}
        onPress={createLogout}
      >
        Log Out
      </ThinButton>
      <Text>history</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 64
  },
  logoutContainer: {
    alignSelf: 'flex-end'
  }
});
