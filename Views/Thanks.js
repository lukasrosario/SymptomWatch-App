import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../assets/colors';

export default Thanks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Thanks for keeping our community safe.</Text>
      <Text style={styles.bottomText}>
        Be sure to check back tomorrow to update your symptoms.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  topText: {
    fontSize: 36,
    marginBottom: 24,
    color: colors.secondary
  },
  bottomText: {
    fontSize: 24,
    marginTop: 24,
    color: colors.secondary
  }
});
