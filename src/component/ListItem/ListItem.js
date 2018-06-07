import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onPressed}>
        <View style={styles.listItem}>
            <Image style={{width: 30, height: 30, resizeMode: 'contain', marginEnd: 5}} source={props.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: 'row', 
        alignContent: 'center'
    }
});

export default listItem;