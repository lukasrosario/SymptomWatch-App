import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { colors } from '../assets/colors';

export default AuthLoading = (props) => {
  const email = auth().currentUser.email;

  firestore()
    .collection('Users')
    .where('email', '==', email)
    .get()
    .then((querySnapshot) => {
      const phoneNumber = querySnapshot.docs[0]._data.phoneNumber;
      props.navigation.navigate('app');
    })
    .catch((error) => {
      props.navigation.navigate('welcome');
    });

  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.secondary} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  }
});
