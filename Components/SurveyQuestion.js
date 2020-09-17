import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ThinButton from './ThinButton';
import { colors } from '../assets/colors';

export default SurveyQuestion = ({ children, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{children}</Text>
      <View style={styles.buttonsContainer}>
        <ThinButton
          buttonColor={colors.primary}
          textColor={colors.secondary}
          onPress={() => setValue('no')}
          border={value == 'no'}
          buttonOverride={{ borderWidth: 2 }}
          textOverride={{ fontSize: 36 }}
        >
          No
        </ThinButton>
        <ThinButton
          buttonColor={colors.primary}
          textColor={colors.secondary}
          onPress={() => setValue('yes')}
          border={value == 'yes'}
          buttonOverride={{ borderWidth: 2 }}
          textOverride={{ fontSize: 36 }}
        >
          Yes
        </ThinButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    fontSize: 36,
    fontWeight: '300',
    marginBottom: 64,
    textAlign: 'center',
    color: colors.secondary
  },
  buttonsContainer: {
    marginTop: 64,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
