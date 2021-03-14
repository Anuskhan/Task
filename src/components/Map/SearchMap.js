import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from "./style"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import  TransparentHeader  from "../../utils/TransparentHeader"


export default class TrackOrder extends Component {
    onChange(name, val) {
        this.setState({ [name]: val });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"dark-content"}
                    translucent={true}
                />


                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >

                    <MapView.Marker.Animated
                        key={1}
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        description="Set Your Location"
                    >
                        <View style={{}}>
                            {/* <Image
                                source={require("../../assets/Images/location_pin.png")}
                                style={{ height: 45, width: 45 }}
                                resizeMode="contain"
                            /> */}
                        </View>
                    </MapView.Marker.Animated>
                </MapView>

                <View style={{ position: "absolute", bottom: 0, right: 0, left: 0, backgroundColor: "white", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                    <View style={{ marginTop: "10%", marginBottom: "5%" }}>
                        <Text style={{ color: "#575757", fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center" }}>Estimated  time</Text>
                        <Text style={{ fontSize: 25, color: "black", fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center" }}>Less than 6 minute</Text>
                        <Text style={{ fontSize: 12, color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center" }}>Your rider is pick up you</Text>


                    </View>

                </View>

            </View>
        )
    }
}

