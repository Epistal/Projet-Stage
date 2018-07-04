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
          <TouchableOpacity style={styles.button}  onPress={() => {alert("lol")}}>
            <Image style={{width: 50, height: 50}} source={require("../assets/piece.png")}/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("Store")}}>
            <Image style={{width: 50, height: 50}} source={require("../assets/expo.symbol.white.png")}/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
           <Picker
          style={{width: 100}}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
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
    alignItems: 'baseLine',
    justifyContent: 'space-between',
    marginTop: 60,
    margin: 55,
  },
  button: {
    backgroundColor: '#048B9A',
    borderRadius: 20,
    padding: 15,
    marginBottom: 45,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});