import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Loading from '../Views/Loading';

import { colors } from '../assets/colors';

export default AuthLoading = (props) => {
  const uid = auth().currentUser.uid;

  firestore()
    .collection('Users')
    .doc(uid)
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists) {
        props.navigation.navigate('app');
      } else {
        props.navigation.navigate('welcome');
      }
    })
    .catch(() => {
      props.navigation.navigate('welcome');
    });

  return <Loading />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  }
});
