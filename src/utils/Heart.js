import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text, View, Image, TextInput,
    ScrollView, TouchableOpacity, ActivityIndicator, Alert,
} from "react-native";
import Constant from "./constant"
import Global from "./global";
export default class Heart extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    fav = ItemId => {
        let temp = [];
        console.log(ItemId, "favhhhh");

        Global.getDataFromPhone(Constant.USER_FAV_KEY).then(res => {
            console.log(res, "fetch");
            if (res !== null) {
                temp = JSON.parse(res);
                temp.push(ItemId);
                console.log("temptemptemp", temp)

                let uniq = [];
                for (var i = 0; i < temp.length; i++) {
                    if (uniq.indexOf(temp[i]) == -1) uniq.push(temp[i]);
                }
                console.log(uniq);
                let dataFetch = JSON.stringify(uniq);
                console.log(dataFetch, "dataFetch");

                Global.saveDataInPhone(Constant.USER_FAV_KEY, dataFetch);
                this.asyn();
                // this.setState({ dislike: false })
            } else {
                let dataFetch = JSON.stringify([ItemId]);

                console.log(dataFetch, "dataFetch else");

                Global.saveDataInPhone(Constant.USER_FAV_KEY, dataFetch);
                this.asyn();
            }
        });
    };
    showAlert() {
        alert('Hello World');
    }
    favDislike = ItemId => {
        console.log(ItemId, "asdsd shoppp");
        var temp = [];

        Global.getDataFromPhone(Constant.USER_FAV_KEY).then(res => {
            if (res !== null) {
                temp = JSON.parse(res);

                console.log(temp);

                for (let index = 0; index < temp.length; index++) {
                    if (temp[index] == ItemId) {
                        temp.splice(index, 1);
                        console.log("deleted", temp);
                        Global.saveDataInPhone(
                            Constant.USER_FAV_KEY,
                            JSON.stringify(temp)
                        );
                        // this.setState({ dislike: false })
                        this.asyn();
                    }
                }
            }
        });
    };
    asyn = () => {
        Global.getDataFromPhone(Constant.USER_FAV_KEY).then(res => {
            if (res !== null) {
                temp = JSON.parse(res);
                this.setState({ arr: temp });
                this.props.func(temp)
                console.log(temp, "sadasda temp temp");
            }
        });
    };
    cbLike = () => {
        Global.getDataFromPhone(Constant.LIKES).then(res => {
            if (res !== null) {
                temp = JSON.parse(res);
                this.setState({ arr: temp });
                this.props.funcLike(temp)
                console.log(temp, "sadasda temp temp");
            }
        });
    };


    like = () => {
        let { item } = this.props
        let data =
        {
            "ItemId": item.ItemId,
            "Item": null,
            "UserId": item.UserId,
            "User": null,
            "Action": "Like"
        }
        console.log(data)
        Global.postRequest(Constant.LIKE, data).then(res => {
            console.log(res.status)
            if (res.status == 200) {
                Global.getDataFromPhone(Constant.LIKES).then(res => {
                    console.log(res, "fetch");
                    if (res !== null) {
                        temp = JSON.parse(res);
                        temp.push(item.ItemId);
                        console.log("temptemptemp", temp)

                        let uniq = [];
                        for (var i = 0; i < temp.length; i++) {
                            if (uniq.indexOf(temp[i]) == -1) uniq.push(temp[i]);
                        }
                        console.log(uniq);
                        let dataFetch = JSON.stringify(uniq);
                        console.log(dataFetch, "dataFetch");

                        Global.saveDataInPhone(Constant.LIKES, dataFetch);
                        this.cbLike();
                        // this.setState({ dislike: false })
                    } else {
                        let dataFetch = JSON.stringify([item.ItemId]);

                        console.log(dataFetch, "dataFetch else");

                        Global.saveDataInPhone(Constant.LIKES, dataFetch);
                        this.cbLike();
                    }
                })
            }
        })
    }
    disLike = () => {
        let { item } = this.props
        let data =
        {
            "ItemId": item.ItemId,
            "Item": null,
            "UserId": item.UserId,
            "User": null,
            "Action": "dislike"
        }
        console.log(data)
        Global.postRequest(Constant.LIKE, data).then(res => {
            console.log(res.status)
            if (res.status == 200) {
                let ItemId = item.ItemId;

                var temp = [];

                Global.getDataFromPhone(Constant.LIKES).then(res => {
                    if (res !== null) {
                        temp = JSON.parse(res);

                        console.log(temp);

                        for (let index = 0; index < temp.length; index++) {
                            if (temp[index] == ItemId) {
                                temp.splice(index, 1);
                                console.log("deleted", temp);
                                Global.saveDataInPhone(
                                    Constant.LIKES,
                                    JSON.stringify(temp)
                                );
                                // this.setState({ dislike: false })
                                this.cbLike();
                            }
                        }
                    }
                });
            };

        })
    }
    render() {
        let { } = this.state;

        return (

            <View style={{ flexDirection: "row-reverse" }}>

                {this.props.fav ?
                    <TouchableOpacity onPress={() => this.favDislike(this.props.id)}>
                        <Icon name="heart" style={{ color: "#ed1f92", fontSize: 20 }} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => this.fav(this.props.id)}>
                        <Icon name="heart" style={{ color: "#b2b2b2", fontSize: 20 }} />
                    </TouchableOpacity>

                }
                <View style={{ paddingHorizontal: 7 }}>
                    {this.props.like ?
                        <TouchableOpacity onPress={() => this.disLike()}>
                            <Icon name="thumbs-o-up" style={{ color: "#ed1f92", fontSize: 20 }} />

                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => this.like()}>

                            <Icon name="thumbs-o-up" style={{ color: "#b2b2b2", fontSize: 20 }} />
                        </TouchableOpacity>

                    }

                </View>
            </View>

        );
    }
}
