/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://www.youtube.com/watch?v=_K41vd_W2qE
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View, 
  StatusBar
} from 'react-native';

import Routes from './src/Routes';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor="#000000"
          barStyle="light-contnent"
        />
        <SignUp/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAF6',
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center'
  }
});
