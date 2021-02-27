import React, { Component } from 'react';
import Routeskey from "../../navigation/routeskey"

import Style from './JobLogMainStyle';
import {
    Text,
    View, TouchableOpacity,
    SafeAreaView, Image,
    FlatList,
    ActivityIndicator
} from 'react-native';
// import Global from "../../utils/global"  
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import Global from "../../utils/global"

class AvailableJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            data: [],
            isLoading: true
        }
    }


    componentDidMount() {
        Global.getRequest(Constant.SUGGEST).then((res) => {
            console.log("Response status", res.data)
            if (res.status == 200) {
                this.setState({ data: res.data })
            }

        }).catch((error) => {
            console.log(error.message)
        })
    }


    renderItem({ item, index }) {
       
        let source = require('../../assets/images/ava.png');
        return (
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate(Routeskey.CHAT, item)}
             activeOpacity={0.5} style={Style.listItem} >
               
                <View style={Style.listItemDetail}>

                    <Text style={Style.listItemText}>Date / Time : 12-2-2021 16:00</Text>
                    <Text style={Style.listItemText}>Pickup : Base</Text>
                  

                <View style={Style.row} >
                    <Text style={Style.listItemSubText}>Drop off : Heathrow</Text>
                   
                    <Text style={Style.red}>£ 35.00</Text>
                </View>
                </View>

            </TouchableOpacity>
        )
    };

    render() {
        const { data } = this.state
        return (
<View style={Style.container}>

            <SafeAreaView  >

                <View style={Style.lis}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Avaiable List</Text>
                </View>
                {data.length ? <FlatList

data={[1,2,4]}
renderItem={this.renderItem.bind(this)}
keyExtractor={(item, index) => { return index.toString() }}
onEndReached={this.onScrollHandler}
onEndThreshold={0}
/> : <ActivityIndicator style={Style.load} color={"black"} size={"large"} />}

            </SafeAreaView>
</View>


        );
    }
}


export default AvailableJob