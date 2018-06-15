import React from 'react';
import {Modal, View, Text, Image, Button} from 'react-native';

const PlaceDetail = (props) => {
    modalContent = null;

    if (props.selectedItem !== null){
        modalContent = (
            <View> 
                <Image style={{width: '100%', height:200, resizeMode: 'cover'}} source={props.selectedItem.image} />
                <Text style={{fontWeight: 'bold', fontSize:25, textAlign:'center' }}>{props.selectedItem.name}</Text>
            </View>
        );
    }

    return (
        <Modal visible={props.selectedItem !== null} animationType='slide' onRequestClose={props.onCancelClick} > 
            <View> 
                {modalContent}
                <View>
                    <Button title="Delete" color='red' onPress={props.onDeleteClick}/>
                    <Button title="Close" onPress={props.onCancelClick}/>
                </View>
            </View>
        </Modal>
    );
}

export default PlaceDetail;