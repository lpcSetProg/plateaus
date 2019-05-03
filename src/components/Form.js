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
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Logo extends Component <{}> { 
  render() {
      return (
         <View style={styles.container}>
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor="#ffffff"
            />
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            placeholderTextColor="#ffffff"
            />
            <TouchableOpacity>
                <Text>

                </Text>
            </TouchableOpacity>
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
inputBox: {
    width: 300, 
    backgroundColor: 'rgba(255, 255, 255, 0.3)',  
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginTop: 10
}

});