import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'

export default class Box extends PureComponent {
    constructor(props){
        super(props)
        this.state = {count : 0}
    }
    render() {
        return (
            <View style={{flex : 1 , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
                <Text style={{fontSize : 30 , color : "red"}}> Value = {this.state.count}</Text>
                <View style={{flexDirection : "row"}}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({count : this.state.count + 1})
                            console.log(this.state.count)  
                        }}
                    >
                        <View style={{backgroundColor : "green" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Cộng</Text>
                        </View>                                                
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{backgroundColor : "red" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Trừ</Text>
                        </View>                                                
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{backgroundColor : "orange" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Reset</Text>
                        </View>                                                
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
