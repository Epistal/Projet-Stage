import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
    title: 'Eclairage',
  };
  render() {
   return (
      
      <View style={styles.container}>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("picker")}}>
            <Image style={{width: 50, height: 50}} source={require("../assets/piece.png")}/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("Store")}}>
            <Image style={{width: 50, height: 50}} source={require("../assets/expo.symbol.white.png")}/>
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