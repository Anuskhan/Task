import React, { Component } from "react";
import SettingStyle from "./SettingStyle";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  
  FlatList,
  ImageBackground
} from "react-native";
import StarRating from "react-native-star-rating";
import  TransparentHeader  from "../../utils/TransparentHeader"

export default class Stylelist extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onValueChange = value => {
    this.setState({
      selected: value
    });
  };







  render() {
    return (
      <ImageBackground
      resizeMethod="scale"
      source={require("../../assets/images/bgx.jpg")}
      style={{ flex: 1 }}
  >
      <View style={SettingStyle.View}>
 <TransparentHeader props={this.props} title={"Review"} />
         {[1,2,3,4].map(()=>(
        <View style={{ alignItems: "center" ,marginTop:10}}>
 <View style={SettingStyle.head}>
 <TouchableOpacity
  onPress={() => {}}
   style={SettingStyle.box}
   activeOpacity={1}
   onPress={() => { }}
 >
   <Image
       style={SettingStyle.thumbnail}
                         source={require('../../assets/images/ava.png')}
                     />
   <View style={{ flexDirection: "column", justifyContent: "center" }}>
     <Text
       style={{
         fontSize: 15,
         paddingHorizontal: 10,
         color: "black"
       }}
     >
       First available stylist
     </Text>
     <Text
       style={{
         fontSize: 15,
         marginBottom:10,
         paddingHorizontal: 10,
         color: "#B1B4B6"
       }}
     >
       See all available time slots
     </Text>
     <StarRating
     disabled={false}
     maxStars={5}
     fullStarColor={"#f89a00"}
     rating={2.9}
     starSize={20}
   //  selectedStar={(rating) => this.onStarRatingPress(rating)}
   />
   </View>
 </TouchableOpacity>

</View>
          </View>
         ))}
         





        
      </View>
      </ImageBackground>
    );
  }
}
