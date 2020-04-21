import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimension extends Component {
    render() {
        return(
            <View style={ {flex: 1} }>
                <View style={{flex: 80, backgroundColor: 'darkorange'}}></View>
                <View style={{flex: 20, backgroundColor: 'deepskyblue'}}></View>
                <View style={{height: 200, backgroundColor: 'fuchsia'}}></View>
            </View>
        );
    }
}