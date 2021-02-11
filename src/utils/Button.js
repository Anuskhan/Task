import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput, Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() { }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.ButtonStyle}
        onPress={this.props.function}>
        <Text style={{ color: '#fff' }}>{this.props.title}</Text>

        {this.props.loading ?
          <ActivityIndicator
            color="white"
            style={{
              width: 40,
              height: 40,
              alignSelf: 'center',
              resizeMode: 'contain',
              position: "absolute", right: 5,
              backgroundColor: "#f3525c",
              borderRadius: 100
            }} />
          :
          <Image
            style={{
              width: 40,
              height: 40,
              alignSelf: 'center',
              resizeMode: 'contain',
              position: "absolute", right: 5
            }}
            source={require('../assets/images/right-arrow.png')}
          />}

      </TouchableOpacity>
    );
  }
}

export class ButtonAds extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() { }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.ButtonStyle1}
        onPress={this.props.function}>
        <Image
          style={{
            width: 40,
            height: 40,
            alignSelf: 'center',
            resizeMode: 'contain',
            position: "absolute", left: 5
          }}
          source={require('../assets/images/advertising.png')}
        />

        <Text style={{ color: '#fff' }}>{this.props.title}</Text>

        <Image
          style={{
            width: 40,
            height: 40,
            alignSelf: 'center',
            resizeMode: 'contain',
            position: "absolute", right: 5
          }}
          source={require('../assets/images/speakers.png')}
        />

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    flexDirection: 'column',
    flex: 10,
    paddingBottom: 10,
  },

  ButtonStyle: {
    backgroundColor: '#393939',
    width: '60%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 15,
  },
  ButtonStyle1: {
    backgroundColor: '#f3525c',
    width: '50%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },

});

export default Button;
