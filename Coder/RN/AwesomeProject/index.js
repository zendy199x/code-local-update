import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import {name as appName} from './app.json';

export default class App extends Component {
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onPress={() => {
                    Alert.alert("You pressed the button")
                }}>
                    title="Press Me"
                </Button>
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
