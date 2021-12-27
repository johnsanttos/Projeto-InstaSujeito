import React, { Component } from 'react';
import { View , Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class appInstaSujeito extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pizza:0,
      pizzas: [
        {key:1, nome: 'Strogonoff', valor: 35.90},
        {key:2, nome: 'Calabresa', valor: 30.90},
        {key:3, nome: 'Portuguesa', valor: 49.90},
        {key:4, nome: 'Brigadeiro', valor: 25.90},
        {key:5, nome: '4 queijos', valor: 70},
      ]
    }
  }

 render(){

  let pizzasItem = this.state.pizzas.map ((v,k)=>{
    return <Picker.item key ={k} value= {k} label= {v.nome} />
  })
  return (
    <View style= {styles.container}> 
      <Text  style= {styles.logo}> Menu pizza</Text>

      <Picker
      selectedValue ={ this.state.pizza}
      onValueChange={(itemValue,itemIndex)=>this.setState({pizza: itemValue})}
      >
      {pizzasItem}
      </Picker>

    <Text  style= {styles.pizzas}> Voce escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
    <Text  style= {styles.pizzas}> R$: {this.state.pizzas[this.state.pizza].valor.toFixed (2)} </Text> 
 
    </View>
   );
 }
}

const styles = StyleSheet.create ({
container: {
  flex: 1,
  marginTop: 20,

},
logo: {
textAlign: 'center',
fontSize: 28,
color: '#000',
fontWeight: 'bold'
},

pizzas: {
marginTop: 15,
fontSize:25,
textAlign: 'center',
color: '#000',

},


})