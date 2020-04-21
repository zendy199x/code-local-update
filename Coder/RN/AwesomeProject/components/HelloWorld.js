import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorld extends Component {
    render() {
        let greeting = `
        
        
        
        
        Hello, I am is Duc Nguyen`;
        return(
            <Text>{ greeting }</Text>
        );
    }
}