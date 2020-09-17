import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

import { colors } from './assets/colors';

import Login from './Views/Login';
import Navigator from './Navigation/Navigator';

export default app = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.secondary} size="large" />
      </View>
    );

  if (!user) {
    return <Login />;
  } else {
    return <Navigator />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  }
});
