import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity , TextInput , Dimensions} from 'react-native'

const DeviceWidth = Dimensions.get("window").width
export default class Form extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            shouldShowForm : true
        }
    }
    getShouldShowForm(){
        if(this.state.shouldShowForm){
            return(
                <View>
                    <View style={{flexDirection : 'column' , backgroundColor : 'gainsboro' , padding : 10 , justifyContent : 'center' ,  alignItems : 'center'  }}>
                        <TextInput 
                            style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , marginBottom : DeviceWidth * 0.03  , fontSize : 20}}
                            placeholder="English"/>
                        <TextInput 
                            style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , fontSize : 20}}
                            placeholder="Vietnamese"/>
                        </View>
                    <View style={{flexDirection : "row" , marginTop : DeviceWidth * 0.01 , alignItems : "center"}}>
                        <TouchableOpacity
                            style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 , marginRight : DeviceWidth * 0.03}}
                        >
                            <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' }}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{backgroundColor : "#C82333", padding : 10 , borderRadius : 8}}
                        >
                            <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else{
            return(
                <TouchableOpacity
                    style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 ,width : DeviceWidth * 0.7 }}
                >
                     <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' ,textAlign : 'center'}}>+</Text>
                </TouchableOpacity>
            )
        }
    }
    render() {
        return (
            <View style={{flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center'}}>
                {this.getShouldShowForm()}
                <Text>{JSON.stringify(this.state)}</Text>
                
            </View>
        )
    }
}
