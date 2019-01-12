/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAcuyPdyiPceJtEYbNr0iWH1FXyQpg_G8E",
      authDomain: "projeto-teste-3ecf9.firebaseapp.com",
      databaseURL: "https://projeto-teste-3ecf9.firebaseio.com",
      projectId: "projeto-teste-3ecf9",
      storageBucket: "projeto-teste-3ecf9.appspot.com",
      messagingSenderId: "267121522550"
    };
    firebase.initializeApp(config);

  }

  interactingFirebase() {
    var users = firebase.database().ref("usuarios");

    // users.child("003").child("nome").set("Pedro Jose de Souza Neto");
    // users.child("002").remove();
    // users.push().child("nome").set("Pedro Jose de Souza Neto");
    users.push().set({
      nome: "Pedro",
      sobrenome: "Neto"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={ () => this.interactingFirebase() } title="New Interaction" color="#841584" accessibilityLabel="Salvar Dados" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
