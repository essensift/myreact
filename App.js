import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/component/PlaceInput/PlaceInput";
import PlaceList from "./src/component/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: []
  };

  placeImage = {uri: "http://gambar.batutimes.com/1479610107-amarta-hills-1-1.jpg"}

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ key: Math.random().toString(), name: placeName, image:this.placeImage })
      };
    });
  }

  placeDeleteHandle = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onDeleteMethod={this.placeDeleteHandle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
