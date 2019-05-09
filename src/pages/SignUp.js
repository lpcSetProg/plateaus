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

export default class SignUp extends Component <{}> { 
    render() {
        return (
            <View style={styles.container}>
              <Logo/>
              <Form type="SignUp"/>
              <View style={styles.signUpTextCont}>
                 <Text style={styles.signUpText}>
                   Already have an account?
                 </Text>
                 <Text style={styles.signUpButton}>
                   Sign in 
                 </Text>
              </View>
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
    },
    signUpTextCont : {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signUpText : {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 16
    },
    signUpButton: {
      color : '#ffffff',
      fontSize: 16,
      fontWeight: '500'
    }
  });