import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startMain from '../Home/startMain';

class AuthScreen extends Component {

    loginHandler = () => {
        startMain();
    }

    render () {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}

export default AuthScreen;