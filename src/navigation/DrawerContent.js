import React, { Component } from 'react';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../utils/colors'

import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';


import { View, Image, StyleSheet,StatusBar, Text, Switch, TouchableOpacity, Dimensions } from "react-native"
const height = Dimensions.get('window').height;
import RoutesKey from './routeskey';
import Global from "../utils/global"
import Constant from "../utils/constant"
const LogOut = (props) => {
    Global.removeStorage(Constant.USER_DATA_KEY)
    console.log("PROPS", props)

    props.navigation.navigate(RoutesKey.SPLASH)
}


class CustomDrawerContent extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            Name:"",
            Id:""
        }
    }




    render() {
        const { data,Name,Id,source } = this.state

        return (
            <DrawerContentScrollView {...this.props}>
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                    <View style={{ height, flex: 1, padding: 10 ,backgroundColor:Colors.cyanBlue}}>
                        {/* <DrawerItemList {...props} /> */}
                        <View style={styles.MainContainer}>
                            <View style={styles.RoundImage}>
                                <Image source={require("../assets/images/ava.png")}
                                    style={{ width: 70, height: 70, borderRadius: 150 / 2 }} />
                            </View>
                            <View style={styles.NameAndRole}>
                                <Text style={[styles.Namee, { color: "#fff" }]}>DRIVER</Text>
                                <Text style={[styles.Rolee, { color: "#fff" }]}>#12213123</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate(RoutesKey.LOGIN)
                            }}
                                style={styles.Link} >
                                <Icon size={20} style={{  textAlign: 'center',
        width: 25,
        height: 20,
      }} color="#fff" name="user" />

                                <Text style={styles.LinkName}>Profile</Text>
                            </TouchableOpacity>
                         

                        </View>

                    </View>

               
            </DrawerContentScrollView >
        );
    }
}
export default CustomDrawerContent

const styles = StyleSheet.create(
    {
        MainContainer:
        {
           
            flex: 0.1,
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',

            // margin: 5,
            paddingBottom: 20,
            marginTop: 30,
            paddingTop: (Platform.OS === 'ios') ? 20 : 0,


        },
        RoundImage: {
           
        },
        NameAndRole: {
           
            flex: 1,
            paddingHorizontal: 6

        },
        Namee: {
            fontWeight: "bold",
            // fontSize:30,
            // backgroundColor:"pink",
            color: "black"
        },
        Rolee: {
            fontWeight: "100",
            fontSize: 10,
            color: "gray"
        },
        Link: {
            flexDirection: "row",
            marginTop: 20,
            paddingVertical: 10
        },
        LinkName: {
            color: "#000",
            paddingHorizontal: 10,
            fontSize: 12,
            textAlignVertical: "center"


        }

    });