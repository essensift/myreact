import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ListItem from '../../ListView/ListItem';

const ListViewContainer = (props) => (
    <View style={{width: '100%'}}> <ListItem key={props.key} placeName={props.placeName}/> </View>
)

export default ListViewContainer;
