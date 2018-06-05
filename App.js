import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/component/ListView/ListItem';

export default class App extends React.Component {
  
  state = {
    placeName: '',
    places: []
  }

  placeChanged = val => {
    this.setState({
      placeName: val
    })
  }

  btnaaa = () => {
    if (this.state.placeName.trim() === '')
      return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };
  
  render() {
    const outputaaa = this.state.places.map((place, i) => (<ListItem key={i} placeName={place}/>));
    return (
      <View style={styles.container}>
        <Text>Hey! this is my first app! I'm using React Native</Text>
        <Text>HORRRAAAyy IBIL !!</Text>
        
        <View style={{width: '100%', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput
            style = {{width: '70%'}}
            placeholder = 'Text input here'
            onChangeText = {this.placeChanged}
          />
          <Button title='Add' style={{width: '30%'}}
            onPress={this.btnaaa}
          />
        </View>
        <View style={{width: '100%'}}> 
          {outputaaa}
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
