import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../assets/colors';

export default HistoryItem = ({ symptom, status }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{symptom}</Text>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 18
  }
});
