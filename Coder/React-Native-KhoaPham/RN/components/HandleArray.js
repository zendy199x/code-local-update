import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const words = ["One","Two","Three","Four"]

export default class HandleArray extends Component {
  render() {
    return (
        <View style={{flex : 1 ,flexDirection : "column", justifyContent : "center" , alignItems : "center" }}>
            {[
               <Text style={{fontSize : 20 , color : "red"}}>{words[0]}</Text>,
               <Text style={{fontSize : 20 , color : "red"}}>{words[1]}</Text>,
               <Text style={{fontSize : 20 , color : "red"}}>{words[2]}</Text>
            ]}
            {words.map(function(word){
                return <Text>{word}</Text>  
            })}
            {words.map(word => <Text>{word}</Text> )}
            
        </View>
    );
  }
}