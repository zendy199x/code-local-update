import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Word extends PureComponent {
    render() {
        let {en , vn , isMemorized} = this.props
        return (
            <View style={{margin : 5 , padding : 20, boderRadius : 5  ,flexDirection : "row" , justifyContent : "space-around" ,backgroundColor : "lavender" }}>
                <Text style={{color : "green" , fontSize : 20}}>{en}</Text>
                <Text style={{color : "red" , fontSize : 20}}>{isMemorized ? "----" : vn}</Text>
            </View>
        )
    }
}
