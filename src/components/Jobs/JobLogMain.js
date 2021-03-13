import React, { Component } from 'react';
import Routeskey from "../../navigation/routeskey"
// import Alert from "../../utils/Alert"
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from '../../utils/colors'
import styles from './JobLogMainStyle'

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
import  TransparentHeader  from "../../utils/TransparentHeader"

export default class JobLogMain extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() { }

    render() {
        let { loader, secure, password, email } = this.state;

        return (

            <ImageBackground
            resizeMethod="scale"
            source={require("../../assets/images/bgx.jpg")}
            style={{ flex: 1 }}>
            <View style={styles.f}>
                <SafeAreaView style={styles.f}>
                    <View style={styles.headerView}>
                    <TransparentHeader props={this.props} title={"Jobs"} />

                    </View>
                    <View style={styles.top}>

                        <View style={{ marginTop: 10 }}>
                            <View style={styles.main}>
                                <ScrollView
                                    showsHorizontalScrollIndicator={true}
                                    showsVerticalScrollIndicator={true}
                                >
                                    

                                    <View style={{ flexDirection: "row" }}>
                                        <View style={styles.sub}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.navigation.navigate(RoutesKey.CHAT)
                                                }}
                                            >

                                                <View style={{ justifyContent: "center", padding: 5 }}>
                                                    <View style={[{
                                                        width: 80,
                                                        height: 80,
                                                        borderRadius: 40 / 2,
                                                        backgroundColor: "#fff",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        elevation: 3,
                                                        marginRight: 3
                                                    }, { alignSelf: "center" }]}>

                                                        {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                                                        <Image
                                                            style={{
                                                                marginVertical: 10,
                                                                width: 80,
                                                                height: 80,
                                                                resizeMode: 'contain',
                                                            }}
                                                            source={{ uri: 'data:image/jpeg;base64,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' }}
                                                        />
                                                    </View>

                                                </View>

                                            </TouchableOpacity>
                                            <Text style={{ alignSelf: "center" }}>Active Jobs</Text>
                                        </View>
                                        <View style={styles.sub}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.navigation.navigate(RoutesKey.SERVICE_DETAIL)
                                                }}
                                            >

                                                <View style={{ justifyContent: "center", padding: 5 }}>
                                                    <View style={[{
                                                        width: 80,
                                                        height: 80,
                                                        borderRadius: 40 / 2,
                                                        backgroundColor: "#fff",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        elevation: 3,
                                                        marginRight: 3
                                                    }, { alignSelf: "center" }]}>

                                                        {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                                                        <Image
                                                            style={{
                                                                marginVertical: 10,
                                                                width: 80,
                                                                height: 80,
                                                                resizeMode: 'contain',
                                                            }}
                                                            source={{ uri: 'https://i.pinimg.com/originals/7f/6c/dc/7f6cdce4c15b2d1548b618ce5573bfd3.png' }}
                                                        />
                                                    </View>

                                                </View>

                                            </TouchableOpacity>
                                            <Text style={{ alignSelf: "center" }}>Current Jobs</Text>
                                        </View>
                                    </View>



                                    <View style={{ flexDirection: "row" }}>
                                    <View style={styles.sub}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.navigation.navigate(RoutesKey.SERVICE_DETAIL)
                                                }}
                                            >

                                                <View style={{ justifyContent: "center", padding: 5 }}>
                                                    <View style={[{
                                                        width: 80,
                                                        height: 80,
                                                        borderRadius: 40 / 2,
                                                        backgroundColor: "#fff",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        elevation: 3,
                                                        marginRight: 3
                                                    }, { alignSelf: "center" }]}>

                                                        {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                                                        <Image
                                                            style={{
                                                                marginVertical: 10,
                                                                width: 80,
                                                                height: 80,
                                                                resizeMode: 'contain',
                                                            }}
                                                            source={{ uri: 'https://www.gracepointwellness.org/images/root/stevepanic.jpg' }}
                                                        />
                                                    </View>

                                                </View>

                                            </TouchableOpacity>
                                            <Text style={{ alignSelf: "center" }}>Pervious Jobs</Text>
                                        </View>
                                        <View style={styles.sub}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.navigation.navigate(RoutesKey.SERVICE_DETAIL)
                                                }}
                                            >

                                                <View style={{ justifyContent: "center", padding: 5 }}>
                                                    <View style={[{
                                                        width: 80,
                                                        height: 80,
                                                        borderRadius: 40 / 2,
                                                        backgroundColor: "#fff",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        elevation: 3,
                                                        marginRight: 3
                                                    }, { alignSelf: "center" }]}>

                                                        {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                                                        <Image
                                                            style={{
                                                                marginVertical: 10,
                                                                width: 80,
                                                                height: 80,
                                                                resizeMode: 'contain',
                                                            }}
                                                            source={{ uri: 'https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-9/18620379_2001962223365887_2332447508234786861_n.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHNfUHjWfiWXpwD9bJuJQkVqy9HVHVG6amrL0dUdUbpqQL10gIkl6gIeXTdVrcKCI7HS4KRNM9J8VkjnChfzqtw&_nc_ohc=gcTzUCvqMxkAX-oPJx7&_nc_ht=scontent.fkhi8-1.fna&oh=8060556d23859e73d9a5b83db3b5b3b4&oe=60525740' }}
                                                        />
                                                    </View>

                                                </View>

                                            </TouchableOpacity>
                                            <Text style={{ alignSelf: "center" }}>Future Jobs</Text>
                                        </View>
                                    </View>

                                </ScrollView >

                            </View>


                        </View>

                    </View>

                </SafeAreaView>
            </View >
</ImageBackground>


        );
    }
}
