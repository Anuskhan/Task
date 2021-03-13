import React, { Component } from 'react';
import { StyleSheet,Platform, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


export default class TransparentHeader extends Component {
    render() {
        return (
            <View style={{ marginVertical:10, height: 30, flexDirection: "row", justifyContent: 'center' }}>
                {this.props.notBackIcon == true ?
                    <View></View> :
                    <TouchableOpacity  style={{ width: 30, height: 30, alignSelf: "center", justifyContent: "center", backgroundColor: `rgba(255, 255, 255, ${0.5})`, borderRadius: 100, position: "absolute", left: 20 }}>
                        <Icon size={30} name="arrow-with-circle-left" color="#000" style={{ alignSelf: "center" }} />
                    </TouchableOpacity>}
                <Text style={{ color: "#000", alignSelf: "center" ,fontSize:18,fontWeight:"bold"}}>{this.props.title}</Text>
            </View>
        )
    }
}

