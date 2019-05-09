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

export default class Form extends Component <{}> { 
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
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity style={styles.button}>
                <Text>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </Text>
            </TouchableOpacity>
        </View>
      ) 
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
},
button: {
    width: 300, 
    textAlign: 'center',
    justifyContent: 'center', 
    backgroundColor: '#1c313a',  
    borderRadius: 25,
    marginTop: 10,
    paddingVertical: 16
},
buttonText: {
   justifyContent: 'center', 
   textAlign: 'center',
   fontWeight: 'bold',
   fontSize: 18,
   marginTop: 0,
   width: 200
},

});