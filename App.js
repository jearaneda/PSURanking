// App.js

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Picker,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Settings from './screens/Settings';
import { Dropdown } from 'react-native-material-dropdown';
import Home from './screens/Home';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
