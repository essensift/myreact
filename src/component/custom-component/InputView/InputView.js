import React from 'react';
import {View, TextInput, Button} from 'react-native';

const InputView = (props) => (
    <View style={{width: '100%', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-between'}}>
        <TextInput
            style = {{width: '70%'}}
            placeholder = 'Text input here'
            onChangeText = {props.OnTextChanged}
        />
        <Button title='Add' style={{width: '30%'}}
            onPress={props.OnClickButton}
        />
    </View>
)

export default InputView;