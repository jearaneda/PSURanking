// Settings.js

import React, { Component } from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export class Settings extends Component {
  render() {
    const resizeMode = 'center';
    return (



        <ImageBackground
        style = {{ flex:1,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'}}
        source={require('../bg3.jpeg')}>



        <Text style = {{textAlign : "center"}}>¡Hola! A continuación obtendremos tu puntaje Ranking con respecto a la fórmula estandarizada. Considera que esto es una estimación y puede haber un pequeño margen de error. </Text>



  <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Comenzar"/>
         </ImageBackground>





    )
  }
};

export default Settings;
