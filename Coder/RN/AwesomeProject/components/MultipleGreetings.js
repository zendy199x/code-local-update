import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        let greetingString = `
        

        Hello ${ this.props.name }. How are you ?
        `
    
        return(
            <Text>{greetingString}</Text>
        )
    }
}

export default class MultipleGreetings extends Component {
    render() {
        return(
            <View
                style = { { alignItems: 'center' } }   
            >
            <Greeting name= 'Nguyen Van Duc'></Greeting>
            <Greeting name= '28 year old'></Greeting>
            </View>
        )
    }
}