import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator, StatusBar, TextInput } from 'react-native';
import Colors from '../../utils/colors'
import {Picker} from '@react-native-community/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Toast from 'react-native-simple-toast';
import Routeskey from "../../navigation/routeskey"
import styles from './LoginStyle';
import {responsiveHeight,responsiveWidth} from "react-native-responsive-dimensions";
export default  Signup   = props => {
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
                    <Text style={styles.logintext}>Signup</Text>
                    <View style={styles.inputView}>
                        <FontAwesome name='user' size={20} color={Colors.black} />
                        <TextInput
                            autoCapitalize={false}
                            autoCorrect={false}
                            style={styles.input}
                            keyboardType='email-address'
                            placeholder='example123@gmail.com'
                            onChangeText={(text) =>  setuserEmail( text )}
                        />
                        <AntDesign name='checkcircle' size={20} color={Colors.black} />


                    </View>
                    <View style={styles.inputView}>
                        <FontAwesome name='lock' size={20} color={Colors.black} />
                        <TextInput
                            autoCapitalize={false}
                            autoCorrect={false}

                            secureTextEntry={showPassword}
                            style={styles.input}
                            placeholder='Password'
                            onChangeText={(text) =>  setuserPassword( text )}
                        />
                        <TouchableOpacity onPress={() => setshowPassword( !showPassword )}>
                            <Entypo name={showPassword ? 'eye-with-line' : 'eye'} size={20} color={Colors.black} />
                        </TouchableOpacity>




                    </View>
                    <View style={styles.pickerView} >
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: responsiveHeight(5), width: responsiveWidth(70) }}
                            onValueChange={(itemValue, itemIndex) => setselectedValue( itemValue )}
                        >
                            <Picker.Item label="#12323" value="" />
                            <Picker.Item label="#1sse32" value="Customer" />
                            <Picker.Item label="sdsd353" value="Admin" />
                            <Picker.Item label="23d44dt" value="Dispenser" />
                            <Picker.Item label="234dsf4" value="DeliveryBoy" />
                        </Picker>
                    </View>
                    <TouchableOpacity
                     onPress={() => props.navigation.navigate(Routeskey.DRAWER)}
                    // onPress={() => getUser()}
                     style={styles.loginButton}>
                        {loginPressed ? <ActivityIndicator size='small' color={Colors.extraDarkBlue} /> :

                            <Text style={styles.buttonText}>SignUp Now</Text>}
                    </TouchableOpacity>
                    <View style={styles.signupView}>
                        <Text>Don't have an Account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate(Routeskey.SIGNUP)}>
                            <Text style={styles.signupText}> LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
