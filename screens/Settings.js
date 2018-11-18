// Settings.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export class Settings extends Component {
  render() {
    return (
      <View style = {{ flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'}}>


        <Text style = {{textAlign : "center"}}>¡Hola! A continuación obtendremos tu puntaje Ranking con respecto a la fórmula estandarizada. Considera que esto es una estimación y puede haber un pequeño margen de error. </Text>



  <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Comenzar"/>
      </View>

    )
  }
};

export default Settings;
