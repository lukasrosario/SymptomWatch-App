import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBar from '../Components/TabBar';
import AuthLoading from './AuthLoading';
import Welcome from '../Views/Welcome';
import Upload from '../Views/Upload';
import History from '../Views/History';

const AppStack = createBottomTabNavigator(
  {
    Upload: {
      screen: Upload
    },
    History: {
      screen: History
    }
  },
  {
    tabBarComponent: TabBar
  }
);

const Navigator = createSwitchNavigator(
  {
    loading: AuthLoading,
    welcome: Welcome,
    app: AppStack
  },
  {
    initialRouteName: 'loading'
  }
);

export default createAppContainer(Navigator);
