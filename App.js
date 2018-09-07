/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Component/Judul';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Judul judul="Biodata "/>
        <Judul judul="Login "/>
        <Judul judul="Form "/>
        <Text style={styles.instructions}>Nama : Wulan Aprianingsih</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
        <Text style={styles.instructions}>No Absen : 40</Text>
        <Image source={require('./foto.png')}
        style={{width: 300,height: 200}}
        />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
