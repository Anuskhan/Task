import React, { Component } from 'react';
import Routeskey from "../../navigation/routeskey"

import Style from './ChatListStyle';
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

class ChatList extends Component {
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
            // console.log("get category", JSON.parse(res))
            console.log("Response status", res.data)
            if (res.status == 200) {
                this.setState({ data: res.data })
            }

        }).catch((error) => {
            console.log(error.message)
        })
    }


    renderItem({ item, index }) {
        let swapimgource = (item.SwapItem.Gallery && item.SwapItem.Gallery.length > 0) ?
            { uri: item.SwapItem.Gallery[0].URL } : require('../../assets/images/32.jpg');

        let Myimgource = (item.MyItem.Gallery && item.MyItem.Gallery.length > 0) ?
            { uri: item.MyItem.Gallery[0].URL } : require('../../assets/images/32.jpg');
        console.log("item", item)
        let source = require('../../assets/images/32.jpg');
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(Routeskey.CHAT, item)} activeOpacity={0.5} style={Style.listItem} >
                <View style={Style.listItemImageContainer}>
                    <Image
                        source={swapimgource}
                        style={Style.listItemImage}
                    />
                </View>
                <View style={Style.listItemDetail}>
                    <Text style={Style.listItemText}>{item.SwapItem.Title}</Text>
                    <Image
                        source={Myimgource}
                        style={Style.listItemImageUser}
                    />
                    <Text style={Style.listItemSubText}>{item.SwapItem.User.Name}</Text>

                </View>
                <View style={{
                    width: "20%", alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity style={Style.listItemDetailIconButton} >
                        <Image
                            source={Myimgource}
                            style={Style.listItemImageUser}
                        />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, alignSelf: "center" }}>{item.MyItem.Title}</Text>
                </View>

            </TouchableOpacity>
        )
    };

    render() {
        const { data } = this.state
        return (

            <SafeAreaView>
                <View style={{
                    backgroundColor: "#FFF", borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25, paddingVertical: 10, alignItems: "center"
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Chat List</Text>
                </View>
                {data.length ? <FlatList

                    data={data}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={(item, index) => { return index.toString() }}
                    onEndReached={this.onScrollHandler}
                    onEndThreshold={0}
                /> : <ActivityIndicator style={Style.load} color={"black"} size={"large"} />}

            </SafeAreaView>


        );
    }
}


export default ChatList