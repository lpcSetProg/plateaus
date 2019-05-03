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

export default class Login extends Component <{}> { 
    render() {
        return (
            <View style={styles.container}>
              <Logo/>
               {/* <Text style={{color:'#1A237E', fontSize:18}}>Hi there</Text> */}
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