import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

import ThinButton from '../Components/ThinButton';

import { colors } from '../assets/colors';

export default Upload = () => {
  return (
    <View style={styles.container}>
      <ThinButton
        containerStyle={styles.logoutContainer}
        text="Log Out"
        buttonColor={colors.secondary}
        textColor={colors.primary}
        onPress={() => auth().signOut()}
      />
      <Text>lets get this bread</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 64
  },
  logoutContainer: {
    alignSelf: 'flex-end'
  }
});
