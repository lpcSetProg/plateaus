/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component <{}> { 
    render() {
        return (
            <View style={styles.container}>
              <Logo/>
              <Form/>
            </View>
        ) 
    }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E8EAF6',
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    }
  });