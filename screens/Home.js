// Home.js

import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, Picker, ImageBackground} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Calculator } from 'react-native-calculator'

export class Home extends Component {

  constructor(props) {
  super(props);
  this.state = { text: 'Selecciona...', text2: "Selecciona...", tuNEM : "0"};
}


  render() {
    let sum = 0;
    let nem = 0;

    let NEM = [{
  value: '4.0',
}, {
  value: '4.1',
}, {
  value: '4.2',
}, {
  value: '4.3',
}, {
  value: '4.4',
}, {
  value: '4.5',
}, {
  value: '4.6',
}, {
  value: '4.7',
}, {
  value: '4.8',
}, {
  value: '4.9',
}, {
  value: '5.0',
}, {
  value: '5.1',
}, {
  value: '5.2',
}, {
  value: '5.3',
}, {
  value: '5.4',
}, {
  value: '5.5',
}, {
  value: '5.6',
}, {
  value: '5.7',
}, {
  value: '5.8',
}, {
  value: '5.9',
}, {
  value: '6.0',
}, {
  value: '6.1',
}, {
  value: '6.2',
}, {
  value: '6.3',
}, {
  value: '6.4',
}, {
  value: '6.5',
}, {
  value: '6.6',
}, {
  value: '6.7',
}, {
  value: '6.8',
}, {
  value: '6.9',
}, {
  value: '7.0',
}];



let tNEM = [
'186', '208','230','252','274','296','318','340', '362','385', '407', '429', '451', '473','495','517','538','558','579','601','623','644','665','686','707','729','750','771','792','813','836'];


function calcula(std, ind ,max){
  if (Number(max) < 5.5) {
    return 'Ajustar maximo, es menor al promedio'
  }

  else if (std > max) {
    return 850
  }
  else if (std < 5.5) {
    return tNEM[ind]

  }

  else {
return Math.round(Number(tNEM[ind]) + Number((((850 - Number(tNEM[ind])))*(std - 5.3))/((Number(max) - 5.3 )))) ;
}
}

    return (

<ImageBackground source={require('../bg3.jpeg')}  style = {{ flex:1,
  flexDirection:'column',
  justifyContent:'center'}} >
    <React.Fragment>
      <Dropdown
        label='Tu NEM'
        data={NEM}
        onChangeText={(text,index) => { this.setState({text,index} ) ;
         this.state.tuNEM = index;
         console.log(this.state.tuNEM);
       }}
        value={this.state.text}

              />

      <Dropdown
        label='El NEM más alto de tu curso'
        data={NEM}
        onChangeText={(text2) => {this.setState({text2});} }
        value={this.state.text2}
      />

      <Text style = {{textAlign : "center"}}>Recuerda que la fórmula usada es la oficial. Se asume un PC3 de 5.5. <Text onPress={() => this.props.navigation.navigate('AssumptionsScreen')}  style = {{color : '#0645AD'}}>¿Por qué? </Text> </Text>
</React.Fragment>



<Button onPress={() => {Alert.alert('Tu ranking es' +  calcula(this.state.text, this.state.tuNEM, this.state.text2) ); console.log(this.state.tuNEM)
}} title="Calcular"/>
</ImageBackground>
    )
  }
}

export default Home
