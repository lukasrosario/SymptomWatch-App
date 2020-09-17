import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../assets/colors';
import { color } from 'react-native-reanimated';

export default Upload = () => {
  return (
    <View style={styles.container}>
      <Text>lets get this bread</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
