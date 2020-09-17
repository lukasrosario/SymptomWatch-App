import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tab from './Tab';

import { colors } from './../assets/colors';

const TabBar = (props) => {
  const { navigation } = props;
  const activeIndex = navigation.state.index;
  return (
    <View style={styles.container}>
      {navigation.state.routes.map((route, index) => {
        return (
          <Tab
            key={index}
            title={route.routeName}
            index={index}
            activeIndex={activeIndex}
            onPress={() => {
              navigation.navigate(route.routeName);
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    padding: 0,
    backgroundColor: 'transparent'
  }
});

export default TabBar;
