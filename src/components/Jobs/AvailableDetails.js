import React, { Component } from 'react';
import Routeskey from "../../navigation/routeskey"
import Colors from '../../utils/colors'

import Style from './JobLogMainStyle';
import {
    Text,
    View, TouchableOpacity,
    SafeAreaView, Image,ImageBackground,
    FlatList,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
// import Global from "../../utils/global"  
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import Global from "../../utils/global"
import  TransparentHeader  from "../../utils/TransparentHeader"

class AvailableDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            data: [],
            isLoading: true
        }
    }


   

    render() {
        const { data } = this.state
        return (
            <ImageBackground
            resizeMethod="scale"
            source={require("../../assets/images/bgx.jpg")}
            style={{ flex: 1 }}
        > 
            <SafeAreaView style={Style.container} >
<ScrollView>
                <View style={Style.lis}>
      <TransparentHeader props={this.props} title={"Avaiable Details"} />
                </View>
               
                <View style={Style.Detail}>

         
         <View style={Style.r}>
         <Text style={Style.d}> Date / Time :</Text>
         <Text style={Style.dr}> 12-2-2021 16:00 </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Customer :</Text>
         <Text style={Style.dr}> Jhon </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Vehicle :</Text>
         <Text style={Style.dr}> Saloon </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}>Date / Time :</Text>
         <Text style={Style.dr}> 12-2-2021 16:00 </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Pickup :</Text>
         <Text style={Style.dr}> Base </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Dropoff :</Text>
         <Text style={Style.dr}> Heathrow </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Journey Type :</Text>
         <Text style={Style.dr}> Heathrow </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Payment :</Text>
         <Text style={Style.dr}> Cash/Credit card/BA </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Account :</Text>
         <Text style={Style.dr}> (If any    ) </Text>      
             </View>
         <View style={Style.r}>
         <Text style={Style.d}> Fares :</Text>
         <Text style={Style.dr}> £ 35.00 </Text>      
             </View>
         <View style={Style.rb}>
             <TouchableOpacity style={Style.row}>

         <FontAwesome name='street-view' size={40} color={Colors.black} />
         <Text  style={Style.h3}> 3 </Text>
             </TouchableOpacity>
             <TouchableOpacity style={Style.row}>

         <FontAwesome name='box' size={40} color={Colors.black} />
         <Text style={Style.h3}> 3 </Text>
             </TouchableOpacity>
          
             </View>
          
</View>

</ScrollView>
            </SafeAreaView>
</ImageBackground>

        );
    }
}


export default AvailableDetails