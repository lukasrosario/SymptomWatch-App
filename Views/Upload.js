import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Swiper from 'react-native-swiper';

import Thanks from './Thanks';
import Loading from './Loading';
import SurveyQuestion from '../Components/SurveyQuestion';
import WideButton from '../Components/WideButton';

import { colors } from '../assets/colors';

export default Upload = () => {
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const uid = auth().currentUser.uid;

  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(uid)
      .get()
      .then((documentSnapshot) => {
        try {
          const lastUpload = documentSnapshot._data.lastUpload
            .toDate()
            .toDateString();
          const currentTime = firestore()
            ._config.statics.Timestamp.now()
            .toDate()
            .toDateString();
          if (currentTime == lastUpload) {
            setUploaded(true);
          }
        } catch {
          setUploaded(false);
        }
        setLoading(false);
      });
  }, []);

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

  function uploadSymptoms() {
    const timestamp = firestore()._config.statics.FieldValue.serverTimestamp();
    firestore().collection('Symptoms').add({
      uid: uid,
      createdAt: timestamp,
      fever: fever,
      cough: cough,
      breath: breath,
      throat: throat
    });
    firestore().collection('Users').doc(uid).update({ lastUpload: timestamp });
    setUploaded(true);
  }

  if (loading) {
    return <Loading />;
  }

  if (uploaded) {
    return <Thanks />;
  }

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
            onPress={() => uploadSymptoms()}
          >
            Submit
          </WideButton>
        )}
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
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
