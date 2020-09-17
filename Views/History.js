import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Loading from './Loading';
import HistoryItem from '../Components/HistoryItem';
import ThinButton from '../Components/ThinButton';

import { colors } from '../assets/colors';

export default History = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const uid = auth().currentUser.uid;

  if (!data) {
    firestore()
      .collection('Symptoms')
      .where('uid', '==', uid)
      .orderBy('createdAt', 'desc')
      .limit(30)
      .get()
      .then((querySnapshot) => {
        let history = querySnapshot.docs;
        history = history.map(function (e) {
          e = e._data;
          e.createdAt = e.createdAt.toDate().toDateString();
          return e;
        });
        setLoading(false);
        setData(history);
      });
  }

  const createLogout = () => {
    Alert.alert('Are you sure you want to log out?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => auth().signOut() }
    ]);
  };

  if (loading) {
    return <Loading colorOffset />;
  }

  return (
    <View style={styles.container}>
      <ThinButton
        containerStyle={styles.logoutContainer}
        buttonColor={colors.primary}
        textColor={colors.secondary}
        onPress={createLogout}
      >
        Log Out
      </ThinButton>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          contentContainerStyle={styles.listStyle}
          renderItem={({ item, index }) => <HistoryItem {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.secondary,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 64
  },
  listContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  listStyle: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logoutContainer: {
    alignSelf: 'flex-end',
    marginBottom: 12
  }
});
