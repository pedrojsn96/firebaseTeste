/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import firebase from 'firebase';
import ListUserComponent from './ListUserComponent';

export default class App extends Component {

  state = {
    users: {},
    loading: true
  }

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

    let usersRef = firebase.database().ref("usuarios");
    usersRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let users = Object.values(data);
      this.setState({users: users, loading: false});
    })
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
    if(this.state.loading){
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      )
    }
    else{
      return (
        <View style={styles.container}>
          <Button onPress={ () => this.interactingFirebase() } title="New Interaction" color="#841584" accessibilityLabel="Salvar Dados" />
  
          {
            this.state.users.length > 0
            ? <ListUserComponent users={this.state.users} />
            : <Text>No Users</Text>
          }
        </View>
      );
    }
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
