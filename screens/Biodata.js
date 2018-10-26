/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
import Judul from '../Component/Judul';


type Props = {};
export default class App extends Component<Props> {
	static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true,
  };
  render() {
    return (
      <View style={styles.container}>
        <Judul judul="Biodata "/>
        <Text style={styles.instructions}>Nama : Wulan Aprianingsih</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 1</Text>
        <Text style={styles.instructions}>No Absen : 40</Text>
        <Image source={require('../foto.png')}
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
    backgroundColor: '#f9da21',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#47993c',
    marginBottom: 7,
  },
});
