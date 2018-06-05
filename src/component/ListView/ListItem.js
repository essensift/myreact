import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ListItem = (prop) => (
    <View style ={ {width: '100%', marginBottom: 5, padding: 5, backgroundColor: '#eee'} }> 
        <Text> {prop.placeName} </Text>
    </View>
);

export default ListItem;