import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class Authentication extends PureComponent {
    render() {
        return (
            <View>
                <Text style=({ backgroundColor: 'blue' })>Authentication</Text>
            </View>
        )
    }
}