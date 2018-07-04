import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker } from 'react-native';
//import PickerExample from './PickerExample.js'

export default class App extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
      state: 'Java'
    }
  }
    static navigationOptions = {
      title: 'Eclairage',
    };

  render() {
   return (
      
      <View style={styles.container}>
      
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}  onPress={() => {alert("Pieces")}}>
            <Image style={{width: 50, height: 50}} source={require("../assets/piece.png")}/>
          </TouchableOpacity>
    
        </View>
        
        <View style={styles.row}>
           <Picker
          style={{width: 110, marginTop: 160}}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Salon" value="salon" />
          <Picker.Item label="Cuisine" value="cuisine" />
          <Picker.Item label="Chambre 1" value="chambre 1" />
          <Picker.Item label="Chambre 2" value="chambre 2" />
          <Picker.Item label="Chambre 3" value="chambre 3" />
          <Picker.Item label="Bain-WC" value="bain-wc" />
          <Picker.Item label="Couloirs" value="couloirs" />
          <Picker.Item label="Jardin" value="jardin" />
          <Picker.Item label="Garage" value="garage" />
          <Picker.Item label="Piscine" value="piscine" />
        </Picker>
            <TouchableOpacity style={styles.buttonok} onPress={()=>{alert(this.state.language)}}>
            <Image style={{width: 50, height: 50}} source={require("../assets/valider.png")}/>
          </TouchableOpacity>      
        </View>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert(" ")}}>
            <Image style={{width: 50, height: 50}} source={require("../assets/script.png")}/>
          </TouchableOpacity>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E9E8EE',
    justifyContent: 'space-between',
    marginTop: 60,
    margin: 55,
  },
  button: {
    backgroundColor: '#048B9A',
    borderRadius: 20,
    padding: 15,
    marginBottom: 230,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonok: {
    backgroundColor: '#048B9A',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
    marginBottom: 230,
    marginLeft: 15,
    marginRight: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});