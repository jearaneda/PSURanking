// Home.js

import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Calculator } from 'react-native-calculator'

export class Home extends Component {

  constructor(props) {
  super(props);
  this.state = { text: 'Selecciona...', text2: "Selecciona..."};
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



let tNEM = [{
value: '186',
}, {
value: '208',
}, {
value: '230',
}, {
value: '252',
}, {
value: '274',
}, {
value: '296',
}, {
value: '318',
}, {
value: '340',
}, {
value: '362',
}, {
value: '385',
}, {
value: '407',
}, {
value: '429',
}, {
value: '451',
}, {
value: '473',
}, {
value: '495',
}, {
value: '517',
}, {
value: '538',
}, {
value: '558',
}, {
value: '579',
}, {
value: '601',
}, {
value: '623',
}, {
value: '644',
}, {
value: '665',
}, {
value: '686',
}, {
value: '707',
}, {
value: '729',
}, {
value: '750',
}, {
value: '771',
}, {
value: '792',
}, {
value: '813',
}, {
value: '835',
}];

    return (

<View>
    <React.Fragment>
      <Dropdown
        label='Tu NEM'
        data={NEM}
        onChangeText={(text) => { this.setState({text})} }
        value={this.state.text}
              />

      <Dropdown
        label='El NEM más alto de tu curso'
        data={NEM}
        onChangeText={(text2) => {this.setState({text2}); } }
        value={this.state.text2}
      />

      <Text style = {{textAlign : "center"}}>Tu ranking es: {this.state.text} + {this.state.text2} </Text>
</React.Fragment>



<Button onPress={() => Alert.alert('Tu ranking es' + Number((850 - Number(this.state.text))/(this.state.text2 - 5.5 )) ) } title="Calcular"/>
</View>
    )
  }
}

export default Home
