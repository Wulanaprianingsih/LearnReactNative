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
        <TextInput/>
        <TextInput/>
        <TouchableOpacity onPress={()=>this.props.navigator.push({
          screen: 'example.Biodata'
        })}>
          <Text style={{backgroundColor:'#fff'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ea1f54',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#f9f7f8',
    marginBottom: 5,
  },
});
