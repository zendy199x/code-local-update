import React, { Component } from 'react';
import { View } from 'react-native';

export default class AlignItemsBasics extends Component {
    render() {
        return (
        // Try setting `alignItems` to 'flex-start'
        // Try setting `justifyContent` to `flex-end`.
        // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{height: 50, backgroundColor: 'skyblue'}} />
                <View style={{height: 100, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};
