import React, { Component } from 'react';
import Routeskey from "../../navigation/routeskey"
// import Alert from "../../utils/Alert"
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from '../../utils/colors'
import styles from './HomeStyle'

import {
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity, SafeAreaView,
    ScrollView,
    Platform, Dimensions,
    StyleSheet,
    Share
} from 'react-native';
import RoutesKey from '../../navigation/routeskey';

export default class Services extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() { }

    render() {
        let { loader, secure, password, email } = this.state;

        return (


            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.headerView}>
                  
                  <Text style={styles.h}>Home</Text>
              </View>
                    <View style={{ flex: 0.9, marginTop: -10, backgroundColor: "#fff", borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>

                        <View style={{ marginTop: 10 }}>
                            <View style={{
        justifyContent: "space-between"
        , width: "99%", paddingVertical: 10,
        // borderBottomWidth: 1, borderBottomColor: "#b2b2b2",
        marginHorizontal: 10, paddingBottom: 5
    }}>
                                <ScrollView
                                    showsHorizontalScrollIndicator={true}
                                    showsVerticalScrollIndicator={true}
                                >
                                    {
                                        [1, 2, 3].map(() => {
                                            return (

                                                <View style={{ flexDirection: "row" }}>
                                                    <View style={ {
        marginBottom: 1, width: "45%", margin: 5,
        borderWidth: 1, borderColor: "#f2f2f2",
        borderRadius: 10, elevation: 4,
        paddingVertical: 20, alignItems: "center", backgroundColor: "#fff",
    }}>

                                                        <TouchableOpacity
                                                            onPress={() => {
                                                                this.props.navigation.navigate(RoutesKey.SERVICE_DETAIL)
                                                            }}
                                                        >

                                                            <View style={{ justifyContent: "center", padding: 5 }}>
                                                                <View style={[{
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
        marginRight: 3
    }, { alignSelf: "center" }]}>

<FontAwesome name='lock' size={25} color={Colors.cyanBlue} />
                                                                    {/* <Image
                                                                        style={ {
                                                                            marginVertical: 10,
                                                                            width: 25,
                                                                            height: 20,
                                                                            resizeMode: 'contain',
                                                                        }}
                                                                        source={require("../../assets/images/9mobile.png")}
                                                                    /> */}
                                                                </View>
                                                                <Text>Home</Text>
                                                            </View>
                                                        </TouchableOpacity>

                                                    </View>
                                                    <View style={ {
        marginBottom: 1, width: "45%", margin: 5,
        borderWidth: 1, borderColor: "#f2f2f2",
        borderRadius: 10, elevation: 4,
        paddingVertical: 20, alignItems: "center", backgroundColor: "#fff",
    }}>
                                                    <TouchableOpacity
                                                            onPress={() => {
                                                                this.props.navigation.navigate(RoutesKey.SERVICE_DETAIL)
                                                            }}
                                                        >

                                                            <View style={{ justifyContent: "center", padding: 5 }}>
                                                                <View style={[{
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
        marginRight: 3
    }, { alignSelf: "center" }]}>

<FontAwesome name='lock' size={25} color={Colors.cyanBlue} />
                                                                    {/* <Image
                                                                        style={ {
                                                                            marginVertical: 10,
                                                                            width: 25,
                                                                            height: 20,
                                                                            resizeMode: 'contain',
                                                                        }}
                                                                        source={require("../../assets/images/9mobile.png")}
                                                                    /> */}
                                                                </View>
                                                                <Text>Home</Text>
                                                            </View>
                                                        </TouchableOpacity>


                                                </View>
                                                </View>
                                            )
                                        })
                                    }

                                </ScrollView >

                            </View>

                           
                        </View>

                    </View>

                </SafeAreaView>
            </View >



        );
    }
}
