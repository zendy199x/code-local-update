import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView , TextInput} from 'react-native'


const DeviceHeight = Dimensions.get('window').height
const DeviceWidth = Dimensions.get("window").width
export default class List extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            words : [
                {id : "a1" , en : "One" , vn : "Một" , isMemorized : true},
                {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
                {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
                {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
                {id : "a5" , en : "Five" , vn : "Năm" , isMemorized : true},
                {id : "a6" , en : "Six" , vn : "Sáu" , isMemorized : true},
            ],
            shouldShowForm : false,
            txtEn : "",
            txtVn : ""
        }
    }
    removeWord(id){
        const words = this.state.words.filter(item => {
            if(item.id == id) return false
            return true
        })
        this.setState({words})
    }
    toggleWord(id){
        const newWords = this.state.words.map(item => {
            if(item.id !== id) return item
            return {...item , isMemorized : !item.isMemorized}
        })
        this.setState({words : newWords})
    }
    getWordItem(word){
        return (   
            <View 
                key={word.id}
                style={{ flexDirection : 'column' , height : DeviceHeight * 0.2 , margin : 10 , backgroundColor : 'gainsboro' , padding : 10 , borderRadius : 5}}>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                    <Text style={{fontSize : 30 , color :  'green' }}>{word.en}</Text>
                    <Text 
                        style={{fontSize : 30 , color :  'red' }}>
                            {word.isMemorized ? "----" : word.vn}
                    </Text>
                </View>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                        <TouchableOpacity
                            onPress={() =>this.toggleWord(word.id)}
                            style={{backgroundColor : word.isMemorized ? "green" : "red" , padding : 10 , borderRadius : 5}}
                        >
                            <Text style={{fontSize : 20 , color : 'white'}}>{word.isMemorized ? "Forgot" : "isMemorized"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            onPress={() => this.removeWord(word.id)}
                            style={{backgroundColor : "orange" , padding : 10 , borderRadius : 5}}
                        >
                            <Text style={{fontSize : 25 , color :  'white' }}>Remove</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
    getShouldShowForm(){
        if(this.state.shouldShowForm){
            return(
                <View>
                    <View style={{flexDirection : 'column' , backgroundColor : 'gainsboro' , padding : 10 , justifyContent : 'center' ,  alignItems : 'center'  }}>
                        <TextInput 
                            style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , marginBottom : DeviceWidth * 0.03  , fontSize : 20}}
                            value={this.state.txtEn}
                            onChangeText={text => this.setState({txtEn : text})}
                            placeholder="English"/>
                        <TextInput 
                            value={this.state.txtVn}
                            onChangeText={text => this.setState({txtVn : text})}
                            style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , fontSize : 20}}
                            placeholder="Vietnamese"/>
                        </View>
                    <View style={{flexDirection : "row" , marginTop : DeviceWidth * 0.01 , alignItems : "center" , justifyContent : "center"}}>
                        <TouchableOpacity
                            style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 , marginRight : DeviceWidth * 0.03}}
                        >
                            <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' }}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({shouldShowForm : !this.state.shouldShowForm})
                            }}
                            style={{backgroundColor : "#C82333", padding : 10 , borderRadius : 8}}
                        >
                            <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={{alignItems : "center" }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({shouldShowForm : !this.state.shouldShowForm})
                        }}
                        style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 ,width : DeviceWidth * 0.7 }}
                    >
                        <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' ,textAlign : 'center'}}>+</Text>
                    </TouchableOpacity>
                </View>
               
            )
        }
    }
    render() {
        return (
            <ScrollView style={{flex : 1 }}>
                {this.getShouldShowForm()}
                {this.state.words.map(word =>this.getWordItem(word))}
            </ScrollView>
                
            
        )
    }
}
