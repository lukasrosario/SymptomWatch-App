import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import SymptomItem from './SymptomItem';

import { colors } from '../assets/colors';

export default HistoryItem = ({ createdAt, fever, cough, breath, throat }) => {
  const [expanded, setExpanded] = useState(false);

  const symptomCount = [fever, cough, breath, throat].reduce(
    (a, v) => (v === 'yes' ? a + 1 : a),
    0
  );

  let containerColor = colors.green;
  if (symptomCount >= 1) {
    containerColor = colors.yellow;
  }
  if (symptomCount >= 3) {
    containerColor = colors.red;
  }

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      style={[styles.container, { backgroundColor: containerColor }]}
    >
      <Text style={styles.date}>{createdAt}</Text>
      <View style={[styles.dropdown, { display: expanded ? 'flex' : 'none' }]}>
        <SymptomItem symptom="Fever" status={fever} />
        <SymptomItem symptom="Cough" status={cough} />
        <SymptomItem symptom="Short Breath" status={breath} />
        <SymptomItem symptom="Sore Throat" status={throat} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: '100%',
    borderRadius: 12,
    marginBottom: 12
  },
  date: {
    fontSize: 26,
    textAlign: 'center'
  },
  dropdown: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
