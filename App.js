import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  
  place = '';

  btnaaa = () => {
    alert('aaa')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey! this is my first app! I'm using React Native</Text>
        <Text>HORRRAAAyy IBIL !!</Text>
        
        <View style={{width: '100%', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput
            style = {{width: '70%'}}
            placeholder = 'Text input here'
            
          />
          <Button title='Add' style={{width: '30%'}}
            onPress={this.btnaaa}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  placeInputStyle: {
    width: '100%',
  },
});
