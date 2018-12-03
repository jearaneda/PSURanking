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
import Assumptions from './screens/Assumptions';


const AppNavigator = StackNavigator({
  SettingScreen: { screen: Settings, navigationOptions : {header: null, } },
  HomeScreen: { screen: Home, navigationOptions : {header: null, } },
  AssumptionsScreen: { screen: Assumptions}
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
