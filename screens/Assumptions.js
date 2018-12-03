// Settings.js

import React, { Component } from 'react';
import { View, Text, Button, Image, ImageBackground} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export class Assumptions extends Component {
  render() {
    return (
      <ImageBackground style = {{ flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'}}
        source={require('../bg3.jpeg')}
        >


        <Text> Este applet fue creado para ayudar al proceso de postulación de las universidades chilenas, como solicitud de parte de la coordinación de mi ex-colegio.{'\n'}{'\n'}Para el cálculo se hace una suposición, y es que el promedio del colegio sea 5.4. Esto se hace por simplicidad -muchos no conocen el PC3 de su colegio-.{'\n'}{'\n'}La fórmula -que publicó el DEMRE hace un par de años en su sitio web y que ya no está disponible- es la que sigue:   </Text>

        <Image
          source={require('../coso.png')}

        />



      </ImageBackground>

    )
  }
};

export default Assumptions;
