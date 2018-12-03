// Settings.js

import React, { Component } from 'react';
import { View, Text, Button, Image} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export class Assumptions extends Component {
  render() {
    return (
      <View style = {{ flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'}}>


        <Text> Este applet fue creado con dos motivos: experimentar con React Native y ayudar al proceso de postulación de las universidades chilenas, como solicitud de parte de la coordinación de mi ex-colegio.{'\n'}{'\n'}Para el cálculo se hace una suposición, y es que el promedio del colegio sea 5.4. Esto se hace por simplicidad -muchos no conocen el PC3 de su colegio-.{'\n'}{'\n'}La fórmula -que publicó el DEMRE hace un par de años en su sitio web y que ya no está disponible- es la que sigue:   </Text>

        <Image
          source={require('../ranking_formula.gif')}

        />



      </View>

    )
  }
};

export default Assumptions;
