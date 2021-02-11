import React, { Component } from 'react';
import {
    Button, Text, View, TouchableOpacity, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from "../components/Login/ChatList"
import Top from "../components/Login/Top"
i
import Match from '../components/Login/Match';

function Settings() {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    );
}


export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const Tab = createBottomTabNavigator();
        let active = { color: "#64B0D9", fontSize: 20, marginBottom: Platform.OS === 'ios' ? 0 : -22 }
        let inactive = { color: "#f3525c", fontSize: 20, marginBottom: Platform.OS === 'ios' ? 0 : -22 }
        return (
            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    tabBarOptions={{
                        indicatorStyle: { backgroundColor: '#f3525c' },
                        activeTintColor: "#64B0D9",
                        inactiveTintColor: "#f3525c",
                        allowFontScaling: true,
                        labelStyle: { fontSize: 12, },
                        tabStyle: { alignSelf: "center", padding: Platform.OS === 'ios' ? 10 : 0, },
                        style: { height: Platform.OS === 'ios' ? 70 : 60, backgroundColor: "", },
                    }}
                >
                    <Tab.Screen name="Ads"
                        component={Top}
                        options={{
                            tabBarLabel: 'Ads',
                            tabBarIcon: ({ focused }) => (
                                <Icon name="search-plus" style={focused ? active : inactive} />
                            ),
                        }}
                    />
                    <Tab.Screen name="Swip Top" component={SwipTop}
                        options={{
                            tabBarLabel: 'Flick',
                            tabBarIcon: ({ focused }) => (
                                <MaterialIcons name="library-add" style={focused ? active : inactive} />
                            ),
                        }}
                    />

                    <Tab.Screen name="Add"

                        options={{
                            tabBarButton: () => (<TouchableOpacity
                                activeOpacity={1}
                                onPress={() => { this.props.navigation.navigate(Routeskey.ADD_ADDS) }}
                                style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 60 / 2,
                                    borderWidth: 2,
                                    borderColor: "#b2b2b2",
                                    backgroundColor: "#f3525c",
                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 5
                                    },
                                    shadowOpacity: 0.34,
                                    shadowRadius: 6.27,
                                    bottom: 5
                                }}
                            >
                                <Icon name="camera" style={{ color: "#fff", fontSize: 22 }} />
                            </TouchableOpacity>),

                        }}
                        component={ADD_ADDS}
                    />
                    <Tab.Screen name="Chat" component={Chat}
                        options={{
                            tabBarLabel: 'Chat',
                            tabBarIcon: ({ focused }) => (
                                <Icon name="wechat" style={focused ? active : inactive} />
                            ),
                        }}


                    />
                    <Tab.Screen name="Profile" component={EditProfile}

                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ focused }) => (
                                <Icon name="user" style={focused ? active : inactive} />
                            ),
                        }}
                    />


                </Tab.Navigator>
            </View >
        );
    }
}