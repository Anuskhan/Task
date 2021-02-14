import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator, StatusBar, TextInput, Picker } from 'react-native';
import Colors from '../../utils/colors'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Toast from 'react-native-simple-toast';
import Routeskey from "../../navigation/routeskey"

export default  Login   = props => {
    const [showPassword, setshowPassword] = useState(true);
    const [loginPressed, setloginPressed] = useState(false);
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword ] = useState('');
    const [selectedValue, setselectedValue ] = useState('');
    const [allData, setallData] = useState([]);


    const getUser = async () => {
      
        if (userEmail.length <= 0 || userPassword.length <= 0) {
            alert('Please provide both Email and Password');
        }
        else {
            setloginPressed(true )
           
            if (allData.Email == userEmail && allData.Password == userPassword && allData.Role == selectedValue) {
                if (selectedValue == 'Customer') {
                    Toast.showWithGravity('Successfully', Toast.SHORT, Toast.BOTTOM)
                    props.navigation.navigate('uploaddescription')
                }
               
            }
            else {
                alert("Login Failed")
            }
        }
    }

  
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                <View style={styles.headerView}>
                  
                    <Text style={styles.h}>PRD DRIVER</Text>
                </View>




                <View style={styles.footerView} />
                <View style={styles.cardView}>
                    <Text style={styles.logintext}>Login</Text>
                    <View style={styles.inputView}>
                        <FontAwesome name='user' size={20} color={Colors.cyanBlue} />
                        <TextInput
                            autoCapitalize={false}
                            autoCorrect={false}
                            style={styles.input}
                            keyboardType='email-address'
                            placeholder='example123@gmail.com'
                            onChangeText={(text) =>  setuserEmail( text )}
                        />
                        <AntDesign name='checkcircle' size={20} color={Colors.cyanBlue} />


                    </View>
                    <View style={styles.inputView}>
                        <FontAwesome name='lock' size={20} color={Colors.cyanBlue} />
                        <TextInput
                            autoCapitalize={false}
                            autoCorrect={false}

                            secureTextEntry={showPassword}
                            style={styles.input}
                            placeholder='Password'
                            onChangeText={(text) =>  setuserPassword( text )}
                        />
                        <TouchableOpacity onPress={() => setshowPassword( !showPassword )}>
                            <Entypo name={showPassword ? 'eye-with-line' : 'eye'} size={20} color={Colors.cyanBlue} />
                        </TouchableOpacity>




                    </View>
                    <View style={styles.pickerView} >
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: responsiveHeight(5), width: responsiveWidth(70) }}
                            onValueChange={(itemValue, itemIndex) => setselectedValue( itemValue )}
                        >
                            <Picker.Item label="Select Role" value="" />
                            <Picker.Item label="Customer" value="Customer" />
                            <Picker.Item label="Admin" value="Admin" />
                            <Picker.Item label="Dispenser" value="Dispenser" />
                            <Picker.Item label="DeliveryBoy" value="DeliveryBoy" />
                        </Picker>
                    </View>
                    <TouchableOpacity
                     onPress={() => props.navigation.navigate(Routeskey.DRAWER)}
                    // onPress={() => getUser()}
                     style={styles.loginButton}>
                        {loginPressed ? <ActivityIndicator size='small' color={Colors.extraDarkBlue} /> :

                            <Text style={styles.buttonText}>Login Now</Text>}
                    </TouchableOpacity>
                    <View style={styles.signupView}>
                        <Text>Don't have an Account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
                            <Text style={styles.signupText}> SignUp</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    footerView: {
        flex: 2,
        backgroundColor: Colors.white,
    },
    cardView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        width: responsiveWidth(90),
        height: responsiveHeight(63),
        position: 'absolute',
        zIndex: 2,
        borderRadius: responsiveWidth(2),
        alignSelf: 'center',
        marginTop: responsiveHeight(20),
        backgroundColor: '#fff',
    },
    logintext: {
        fontSize: responsiveFontSize(3),
        alignSelf: 'center',
        marginTop: responsiveHeight(3),
        fontWeight: '500',
        color: Colors.darkBlue
    },
    h: {
        fontSize: responsiveFontSize(3),
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
        fontWeight: '500',
        color: Colors.white
    },
    inputView: {
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(2),
        justifyContent: 'space-evenly',
        marginTop: responsiveHeight(4),
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: .3,
    },
    input: {
        width: '70%',

    },
    loginButton: {
        alignSelf: 'center',
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(2),
        backgroundColor: Colors.cyanBlue,
        marginTop: responsiveHeight(3.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: responsiveFontSize(2),
        color: Colors.white
    },
    signupView: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
    },
    signupText: {
        color: Colors.fadeBlue,
        fontSize: responsiveFontSize(2)
    },
    pickerView: {
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveWidth(2),
        marginTop: responsiveHeight(4),
        borderWidth: .3,




    },

    headerView2: {
        marginLeft: responsiveWidth(4),
        flexDirection: 'row',
        width: responsiveWidth(70),
        alignItems: 'center',
        marginTop: responsiveHeight(5),
    },
    headerView: {
        flex: 1,
        width: responsiveWidth(100),
        alignSelf: 'flex-start',
        backgroundColor: Colors.cyanBlue,


    },



})