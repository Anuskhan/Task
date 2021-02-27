import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Routeskey from "../../navigation/routeskey"
import { StackActions } from '@react-navigation/native';
const imageWidth = Dimensions.get('window').width / 1;

export default class Splash extends Component {
  async componentDidMount() {
    const data = await new Promise(resolve =>
      setTimeout(() => resolve('result'), 3000),
    );
    data &&
      this.props.navigation.dispatch(
        StackActions.replace(Routeskey.JOBAVALIABLEDETAIL)
      );
  }

  render() {
    console.log('rnder');

    return (
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={{uri:'https://image.freepik.com/free-vector/taxi-graphic-design_24908-54863.jpg'}}
      >



        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>


          {/* <Animatable.Image
            duration={600}
            animation="lightSpeedIn"
            source={require('../../assets/images/logo.png')}
            style={{
              width: imageWidth,
              height: 150,
              alignSelf: 'center',
              justifyContent: "center",
              resizeMode: 'contain',
            }}
          /> */}
          <Animatable.Text animation="pulse"
            style={{ fontSize: 30, color: "#575757", fontWeight: "bold" }}
            iterationCount={5} direction="alternate">PRD DRIVER</Animatable.Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
