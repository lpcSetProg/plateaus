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
  View,
  Image
} from 'react-native';

export default class Logo extends Component <{}> { 
  render() {
      return (
         <View style={styles.container}>
          <Image
          style={{width: 300, height: 95}}
          source={require('../images/Plateaus.png')}
          />
          <Text style={styles.logoText}>One-up your climbing. </Text>
        </View>
      ) 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
   
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)'

  }
});