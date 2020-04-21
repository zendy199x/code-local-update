//rnc : tao nhanh component react native
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Design extends Component {
    render() {
        return (
            <View style={{flex : 10 ,flexDirection : "column"}}>
                <View style={{flex : 1 , backgroundColor : "red" , flexDirection :"column"}}>
                    <View style={{flex :1 , backgroundColor : "red" , justifyContent : "center" , alignItems : "center"}}>
                        <Text>A</Text>
                    </View>
                    <View style={{flex :1 , backgroundColor : "blue"}}> 
                        <Text>B</Text>
                    </View >
                    <View style={{flex :1 , backgroundColor : "orange"}}>
                        <Text>C</Text>
                    </View>
                    <View style={{flex :1 , backgroundColor : "green"}}>
                        <Text>D</Text>
                    </View>
                </View>
                <View style={{flex : 1 , backgroundColor : "blue"}}>

                </View>
            </View>
        )
    }
}
