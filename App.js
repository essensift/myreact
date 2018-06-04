import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  
  place = '';
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey! this is my first app! I'm using React Native</Text>
        <Text>HORRRAAAAAAAAAY!!!!!!!!!!!!!!</Text>
        
        <TextInput
          style = {{width: 300}}
          
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
