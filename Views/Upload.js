import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Swiper from 'react-native-swiper';

import SurveyQuestion from '../Components/SurveyQuestion';
import WideButton from '../Components/WideButton';

import { colors } from '../assets/colors';

export default Upload = () => {
  const swiper = React.useRef(null);
  const handleNext = () => {
    if (swiper && swiper.current) {
      swiper.current.scrollBy(1);
    }
  };

  const [fever, setFever] = useState('');
  const [cough, setCough] = useState('');
  const [breath, setBreath] = useState('');
  const [throat, setThroat] = useState('');

  useEffect(() => {
    if (fever != '') {
      handleNext();
    }
  }, [fever, cough, breath]);

  return (
    <Swiper
      ref={swiper}
      loop={false}
      style={{}}
      activeDotColor={colors.secondary}
    >
      <View style={styles.slide}>
        <SurveyQuestion value={fever} setValue={setFever}>
          Do you have a fever?
        </SurveyQuestion>
      </View>
      <View style={styles.slide}>
        <SurveyQuestion value={cough} setValue={setCough}>
          Do you have a cough?
        </SurveyQuestion>
      </View>
      <View style={styles.slide}>
        <SurveyQuestion value={breath} setValue={setBreath}>
          Are you experiencing shortness of breath?
        </SurveyQuestion>
      </View>
      <View style={styles.slide}>
        <SurveyQuestion value={throat} setValue={setThroat}>
          Are you experiencing a sore throat?
        </SurveyQuestion>
        {throat !== '' && (
          <WideButton
            containerStyle={styles.submitContainer}
            buttonColor={colors.secondary}
            textColor={colors.primary}
            onPress={() => alert('sending')}
          >
            Submit
          </WideButton>
        )}
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  submitContainer: {
    position: 'absolute',
    bottom: 128
  }
});
