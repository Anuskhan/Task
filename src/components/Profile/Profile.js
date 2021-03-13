import React, { Component } from 'react'
import { 
 
    Text, View,SafeAreaView,StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from "./style"
import  TransparentHeader  from "../../utils/TransparentHeader"
import Icon from 'react-native-vector-icons/MaterialIcons';

import RoutesKey from "../../navigation/routeskey"



export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView  style={{flex:1}}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />
                <ScrollView style={{ flex: 1 }}>

                     <ImageBackground
                        resizeMethod="scale"
                        source={require("../../assets/images/bgx.jpg")}
                        style={{ flex: 1 }}
                    > 
                        <TransparentHeader props={this.props} title={"Profile"} />
                        <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
                            <View style={styles.circleTop}>
                                <Image
                                    style={{ width: 70, height: 70 }}
                                    source={require('../../assets/images/ava.png')}
                                />
                                <View style={{ height: 10, position: "absolute", width: 20, bottom: 14, right: -3 }}>
                                    <TouchableOpacity style={styles.icon} onPress={() => { alert("image") }}>
                                        <Icon size={15} name="mode-edit" color="white" style={{ alignSelf: "center" }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ paddingBottom: 80, paddingTop: 10 }}>
                                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", color: "white" }}>James Dean</Text>
                                <Text style={{ textAlign: "center", fontSize: 11, color: "white" }}>jamesdean@gmail.com</Text>
                            </View>
                        </View>

                    </ImageBackground>
                    <View style={styles.Box}>


                        <View style={{ marginTop: "12%" }}>
                            <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>PROFILE</Text>
                        </View>
                        <TouchableOpacity>
                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                            <View style={[styles.icon2, { backgroundColor: "#dfe9f2" }]} onPress={() => { alert("image") }}>
                                    {/* <Image source={require('../../assets/Pictures/call.png')} /> */}
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Your Details</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Change your name and other name</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                            <View style={[styles.icon2, { backgroundColor: "#dfe9f2" }]} onPress={() => { alert("image") }}>
                                    {/* <Image source={require('../../assets/Pictures/call.png')} /> */}
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Notification Setting</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update your notification preferences</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.CHANGE_NUMBER)} style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2, { backgroundColor: "#dfe9f2" }]} onPress={() => { alert("image") }}>
                                    {/* <Image source={require('../../assets/Pictures/call.png')} /> */}
                                </View>
                                <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => { this.props.navigation.navigate(RoutesKey.CHANGE_NUMBER) }}>

                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Change Mobile Number</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update your mobile number</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>






                        
                    </View>
                </ScrollView>

                </SafeAreaView>
            </View>
        )
    }
}
