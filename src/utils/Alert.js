import React, { Component } from "react";
import { View, Text, TextInput, Dimensions, Modal, TouchableOpacity, Image } from "react-native";
import StarRating from "react-native-star-rating"
{/* <Alerts buttonHeading="anas" close={() => { this.setState({ showModel: false, }) }} /> */ }


export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgw: true,
            Message: true,
            name: '',
            rate: 0,
        };
    }

    bgwhite = () => {
        return (
            <TouchableOpacity
                onPress={this.props.close}
                style={{
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    opacity: 0.9,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            ></TouchableOpacity>
        );
    };
    onChange(name, val) {
        this.setState({ [name]: val });
    }
    Message = () => {
        return (

            <View
                style={{
                    padding: 30,
                    width: "100%",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}
            >
                <View
                    elevation={5}
                    style={{
                        width: "100%"
                    }}
                >
                    <View
                        style={{
                            padding: 10,

                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,

                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >

                        <View>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                fullStarColor={"#f89a00"}
                                rating={this.state.rate}
                                starSize={30}
                                starStyle={{ paddingHorizontal: 4, paddingVertical: 14 }}
                                selectedStar={(rating) => this.setState({ rate: rating })}
                            />
                        </View>
                        <TextInput
                            underlineColorAndroid="transparent"
                            multiline={true}
                            style={{
                                justifyContent: "center",
                                alignSelf: "center",
                                marginVertical: 10,
                                flexDirection: 'row',
                                width: '90%',
                                alignItems: "center",
                                borderBottomColor: "#b2b2b2",
                                borderBottomWidth: 1,
                                height: 100,
                            }}
                            placeholder="Feedback"
                            placeholderTextColor="#b2b2b2"
                            onChangeText={this.onChange.bind(this, 'name')}
                            value={this.state.name}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.setState({ bgw: false })}
                        style={{
                            padding: 10,
                            // borderRadius: 5,
                            borderTopColor: "gray",
                            borderTopWidth: 1,
                            backgroundColor: "#f3525c",
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 22 }}>
                            Feedback
                        </Text>
                        {/* <TouchableOpacity >
             <Icon type="Entypo" name="cross" style={{ color: "#fff" }} /> 
            </TouchableOpacity> */}
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <>
                {this.state.bgw ?
                    <Modal
                        style={{

                        }}
                        visible={this.state.bgw}
                    >
                        <View
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {this.state.bgw ? this.bgwhite() : null}
                            {this.state.bgw ? this.Message() : null}
                        </View>
                    </Modal> : null
                }
            </>
        );
    }
}