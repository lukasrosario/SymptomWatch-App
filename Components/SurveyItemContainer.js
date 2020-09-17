import React from 'react';
import { View, StyleSheet } from 'react-native';

export default SurveyItemContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    justifyContent: 'space-between'
  }
});
