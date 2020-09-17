import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from './../assets/colors';

const Tab = ({ title, onPress, index, activeIndex }) => {
  const containerCondition =
    index === 0 ? styles.container0 : styles.container1;
  const titleCondition = index === 0 ? styles.title0 : styles.title1;
  const outerCondition = index === 0 ? styles.outer0 : styles.outer1;
  let activityStatus;
  if (index === 0) {
    activityStatus =
      activeIndex === 0 ? styles.leftActive : styles.leftInactive;
  } else if (index === 1) {
    activityStatus =
      activeIndex === 1 ? styles.rightActive : styles.rightInactive;
  }
  return (
    <TouchableOpacity
      style={[styles.outer, outerCondition]}
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={[styles.container, containerCondition, activityStatus]}>
        <Text style={[styles.title, titleCondition]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: '50%'
  },
  outer0: {
    backgroundColor: colors.secondary
  },
  outer1: {
    backgroundColor: colors.primary
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  container0: {
    backgroundColor: colors.primary
  },
  container1: {
    backgroundColor: colors.secondary
  },
  leftActive: {
    borderBottomRightRadius: 10
  },
  leftInactive: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10
  },
  rightActive: {
    borderBottomLeftRadius: 10
  },
  rightInactive: {
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10
  },
  title: {
    fontWeight: '300',
    fontSize: 24
  },
  title0: {
    color: colors.secondary,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2
  },
  title1: {
    color: colors.primary,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2
  }
});

export default Tab;
