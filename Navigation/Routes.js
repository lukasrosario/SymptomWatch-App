import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBar from '../Components/TabBar';

import Login from '../Views/Login';
import Signup from '../Views/Signup';

import Upload from '../Views/Upload';
import History from '../Views/History';

const AuthStack = createBottomTabNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Log In'
      }
    },
    signup: {
      screen: Signup,
      navigationOptions: {
        tabBarLabel: 'Sign Up'
      }
    }
  },
  {
    tabBarComponent: TabBar
  }
);

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
    auth: AuthStack,
    app: AppStack
  },
  {
    initialRouteName: 'app'
  }
);

export default createAppContainer(Navigator);
