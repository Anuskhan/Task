import React, { Component } from 'react';
import Routeskey from "../../navigation/routeskey"
import Colors from '../../utils/colors'

import Style from './StatusStyle';
import {
    Text,
    View, TouchableOpacity,
    SafeAreaView, Image,
    Dimensions,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
// import Global from "../../utils/global"  
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import Global from "../../utils/global"
import {Picker} from '@react-native-community/picker';
import { PieChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
  };



let Button=(props)=>{return(
  <TouchableOpacity onPress={props.func} style={[Style.btn,{backgroundColor :props.color}]}>
  <Text style={Style.color}>{props.title}</Text>
  </TouchableOpacity>  
)}
class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data :[
            {
              name: "Seoul",
              population: 21500000,
              color: "rgba(131, 167, 234, 1)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Toronto",
              population: 2800000,
              color: "#F00",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Beijing",
              population: 527612,
              color: "red",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "New York",
              population: 8538000,
              color: "#ffffff",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Moscow",
              population: 11920000,
              color: "rgb(0, 0, 255)",
              legendFontColor: "#7F7F7F",
            //   legendFontSize: 15
            }
          ],
          selectedValue:''
            
        }
    }


   

    render() {
       let {selectedValue}=this.state;
       
        return (

            <SafeAreaView style={Style.container} >
<ScrollView>

                <View style={Style.lis}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Status</Text>
                </View>
                <View style={Style.sub}>
<Text>Status</Text>
                <Picker
                 mode={"dropdown"}
                 selectedValue={selectedValue}
                 style={{ height: 50, width: '40%'}}
                 onValueChange={(itemValue, itemIndex) => {this.setState({selectedValue:itemValue})}}
                 >
        <Picker.Item label="Day" value="java" />
        <Picker.Item label="Week" value="js" />
        <Picker.Item label="Month" value="Month" />
      </Picker>
                 </View>
     
                <View style={Style.Detail}>

                <View style={{flex:1,justifyContent:'space-evenly', alignItems: 'center' }}>

<PieChart
  data={this.state.data}
  width={screenWidth}
  height={250}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"20"}
  
//   absolute
/>
<View style={Style.view}>

       <Button func={()=>{}}  color={Colors.leaveBgColor} title="Distance"/>
       <Button func={()=>{}}  color={Colors.greyShade1} title="Arived"/>
        <Button func={()=>{}}  color={Colors.cyanBlue} title="Reached"/>
 </View>
 </View>
 </View>
 </ScrollView>
             </SafeAreaView>


        );
    }
}


export default Status
