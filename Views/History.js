import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../assets/colors';
import { color } from 'react-native-reanimated';

export default History = () => {
  return (
    <View style={styles.container}>
      <Text>history</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
