import React, { Component } from 'react'
import { GiftedChat, Send, Bubble, Message, Avatar } from "react-native-gifted-chat";
import ChatStyle from "./ChatStyle";
import {
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    DatePickerAndroid,
    TimePickerAndroid,
    ActivityIndicator,
    SafeAreaView,
    Container,
    StyleSheet, StatusBar, Platform
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Constant from "../../utils/constant"
import Global from "../../utils/global";

const ConnectyCube = require('connectycube-reactnative');
const { width, height } = Dimensions.get('window');
const photo = require('../../assets/images/user.png');
export default class Chat extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userid: 1,
            pid: 0,
            msg: "Hello dear!",
            messages: [],
            Name: "Hanzala",
            dialogid: this.props.route.params.ChatRoom,
            opponentId: this.props.route.params.MyItem.User.ConnectyCubeId,
            login: "User" + this.props.route.params.MyItem.User.Contact,
            Password: "Pass" + this.props.route.params.MyItem.User.Contact,
            // opponentId: 160020,
            type: "3",
            Picdata: {
                data: "string",
                fileName: "string",
                fileSize: 0,
                height: 0,
                isVertical: true,
                originalRotation: "string",
                path: "string",
                timestamp: "string",
                type: "number",
                uri: "boolean",
                width: 0,
                Name: ""
            },
        };


        console.log("asdas");



    }


    async componentDidMount() {

        let loginuser = await Global.getDataFromPhone(Constant.SAVEUSER);
        console.log("Loginuseerere", loginuser)
        loginuser = JSON.parse(loginuser);
        // loginuser.name=this.state.name;
        let opponentId = (this.props.route.params.MyItem.User.userId != loginuser.userId) ? this.props.route.params.MyItem.User.ConnectyCubeId : this.props.route.params.SwapItem.User.ConnectyCubeId
        let Contact = (this.props.route.params.MyItem.User.userId != loginuser.userId) ? this.props.route.params.MyItem.User.Contact : this.props.route.params.SwapItem.User.Contact
        let Name = (this.props.route.params.MyItem.User.userId != loginuser.userId) ? this.props.route.params.MyItem.User.Name : this.props.route.params.SwapItem.User.Name
        let NotificationToken = (this.props.route.params.MyItem.User.userId != loginuser.userId) ? this.props.route.params.MyItem.User.NotificationToken : this.props.route.params.SwapItem.User.NotificationToken
        this.setState({ NotificationToken, opponentId: opponentId, login: "User" + Contact, Password: "Pass" + Contact, Name: Name })
        console.log("Infooooo", opponentId, Contact, this.state.dialogid)
        console.log("++++++++++++aaaaaaaaaaa   ", this.props.route.params)
        ConnectyCube.init({
            appId: 1017,
            authKey: '7wLNb5O3dqvV2GZ',
            authSecret: 'ACpQpxuJbpnB8An'
        });

        ConnectyCube.createSession()
            .then((session) => {
                console.log("session")
                console.log(session)
                this.login();
            })
            .catch((error) => {
                console.log("user error")
                console.log(error)
            });
    }
    see = () => {
        console.log("see start")
        ConnectyCube.createSession(userCredential, (error, session) => {
            console.log("session", session)
            if (session) {
                console.log("session")
                console.log(session)
                this.login();
                // this.connectchat();
            } else {
                console.log("user error")
                console.log(error)
            }
        });
    }


    login = () => {
        var userCredential = { login: this.state.login, password: this.state.Password };
        // var userCredential = { login: data.id, password: data.id };

        ConnectyCube.login(userCredential)
            .then((user) => {
                console.log("user")
                console.log(user);
                this.connectchat();
            })

            .catch((error) => {
                console.log("user error")
                console.log(error)
            });
        // ConnectyCube.login(userCredential, (error, user) => {
        //     if (user) {
        //         console.log("user")
        //         console.log(user)
        //         this.setState({ userid: user.id })
        //         // this.connectchat();
        //     } else {
        //         console.log("user error")
        //         console.log(error)
        //     }
        // });
    }

    addcontact = (userId) => {
        // ConnectyCube.chat.contactlist.add(160020, function(error, contact) {
        //     if (contact) {
        //         console.log("contact")
        //         console.log(contact)
        //     } else {
        //         console.log("contact error")
        //         console.log(error)
        //     }
        // });

        ConnectyCube.chat.contactlist.get(function (error, contactlist) {
            if (contactlist) {
                console.log("contact get")
                console.log(contactlist)
            } else {
                console.log("contactget error")
                console.log(error)
            }
        });

    }

    connectgroup = () => {
        var dialogId = this.state.dialogid;
        console.log('connectgroup', this.state);
        console.log('jid', ConnectyCube.chat.helpers.getRoomJidFromDialogId(dialogId));
        ConnectyCube.chat.muc.join(ConnectyCube.chat.helpers.getRoomJidFromDialogId(dialogId), (error, group) => {
            if (group) {
                console.log("group", group)
            } else {
                console.log("group error", error)
                console.log(error)
            }
        });
    }

    leavegroup = () => {

        ConnectyCube.chat.muc.leave(this.state.dialogid, (error, leave) => {

            if (leave) {
                console.log("leave")
                console.log(leave)
            } else {
                console.log("leave error")
                console.log(error)
            }
        });
    }

    connectchat = () => {
        //    console.log( this.props.navigation.state.prams.item)
        var userCredential = { userId: this.state.opponentId, password: this.state.Password };
        // var userCredentials = { userId: this.state.userid, password: data.id };


        ConnectyCube.chat
            .connect(userCredential)
            .then((contactList) => {
                console.log("contactList")
                console.log(contactList)
                this.getmessage(100);
                this.connectgroup();
                this.onlistenermsg();
            })
            .catch((error) => {
                console.log("contactList error")
                console.log(error)
            });

    }

    onlistenermsg = () => {
        ConnectyCube.chat.onMessageListener = this.getonemsg.bind(this)
    }

    getonemsg = () => {
        this.getmessage(1);
    }


    getmessage = (limit) => {
        console.log("getmessage")
        var arr = this.state.messages;
        var dialogId = this.state.dialogid;
        var filter = { chat_dialog_id: dialogId, sort_desc: 'date_sent', limit: limit, skip: 0 };

        ConnectyCube.chat.message
            .list(filter)
            .then(messages => {
                console.log("messages")
                console.log(messages)
                var id = 1000;
                messages.items.reverse().forEach((item) => {
                    id = this.state.messages.length;
                    var msg = {
                        _id: item._id,
                        text: item.message,
                        createdAt: item.created_at,
                        user: {
                            _id: this.state.opponentId == item.sender_id ? 1 : 2,
                            name: "React Native",
                        },
                        image: item.attachments.length > 0 ? ConnectyCube.storage.privateUrl(item.attachments[0].uid) : '',

                        video: item.attachments.length > 0 && item.attachments[0].type == "video" ? ConnectyCube.storage.privateUrl(item.attachments[0].uid) : '',

                    }
                    if (this.state.messages.length > 0 && this.state.messages[0]._id != item._id) {
                        this.setState(previousState => ({
                            messages: GiftedChat.append(previousState.messages, msg)
                        }));
                    }
                    else if (this.state.messages.length < 1) {
                        this.setState(previousState => ({
                            messages: GiftedChat.append(previousState.messages, msg)
                        }));
                    }
                })
                console.log(this.state.messages);
            }
            )
            .catch(error => {
                console.log("messages error")
                console.log(error)
            });

    }



    sendmessage = (msg) => {
        let { NotificationToken } = this.state
        if (NotificationToken) {
            let SendData = {
                "To": NotificationToken,
                "Message": msg,
                "Title": "Message"
            }
            // alert("sdfsdf")
            console.log("/////////////////////////", Constant.NOTIFICATION + "0000", SendData)
            Global.postNoti(Constant.NOTIFICATION, SendData)
        }
        // var dialog = { _id: this.state.dialogid, type: this.state.type };
        // console.log('sendmessage', dialog);

        // var message = {
        //     type: dialog.type === 3 ? 'chat' : 'groupchat',
        //     body: msg,
        //     extension: {
        //         save_to_history: 1,
        //         dialog_id: dialog._id,
        //     },
        //     markable: 1
        // };

        // var opponentId = dialog.type === 3 ? this.state.opponentId : ConnectyCube.chat.helpers.getRoomJidFromDialogId(dialog._id); //160020
        // console.log('opponet', opponentId);
        // let id = ConnectyCube.chat.send(opponentId, message);
        // console.log(id);

        // if (id != "") {
        //     this.getmessage(1);
        // }
        // function onMessage(userId, message) {
        // }

    }


    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const data = response
                console.log("Data", response.uri.replace('file://', ''))

                data.url = Platform.OS === 'android' ? data.uri : data.uri.replace('file://', '');
                this.setState({ Picdata: data })

                const source = { uri: response.uri };
                let name = Date.now();

                var fileParams = { name: name + '.' + response.type.replace('image/', ''), file: response, type: response.type, size: response.fileSize, public: false };
                ConnectyCube.storage.createAndUpload(fileParams).then((result) => {

                    var fileUID = result.uid;
                    console.log(result)
                    // prepare a message

                    var dialog = { _id: this.state.dialogid, type: this.state.type };
                    var message = {
                        type: dialog.type === 3 ? 'chat' : 'groupchat',
                        body: '',
                        extension: {
                            save_to_history: 1,
                            dialog_id: this.state.dialogid,
                            attachments: [{ uid: fileUID, type: this.state.Picdata.type }]
                        }
                    };

                    var opponentId = dialog.type === 3 ? this.state.opponentId : ConnectyCube.chat.helpers.getRoomJidFromDialogId(dialog._id); //160020

                    let id = ConnectyCube.chat.send(opponentId, message);
                    console.log(id);

                    this.getmessage(1);
                }).catch((error) => { console.log("error", error) });;
            }
        });
    }


    listUsers(params) {
        return new Promise((resolve, reject) => {
            ConnectyCube.users.get(params, (error, result) => {
                if (!error && result) {
                    resolve(result)
                } else if (error.code === 404) {
                    resolve({})
                } else {
                    reject(error)
                }
            })
        })
    }

    listUsersByIds(ids) {
        return new Promise((resolve, reject) => {
            this.listUsers({
                per_page: 100,
                filter: {
                    field: 'id',
                    param: 'in',
                    value: ids || '',
                },
            })
                .then(users => resolve(users))
                .catch(error => reject(error))
        })
    }

    onSend(messages = []) {
        this.sendmessage(messages[0]['text']);
        console.log(this.state.messages)
        this.setState({ messages: this.state.messages })
        console.log(this.state)
        console.log(messages);

        // this.setState(previousState => ({
        //     messages: GiftedChat.append(previousState.messages, messages)
        // }));
    }



    renderSend = (props) => {
        return (
            <View style={{ flexDirection: 'row', height: '100%', alignContent: 'center', paddingRight: 5 }}>
                <Icon name='plus' type='FontAwesome5' style={styles.inputIcon} onPress={this.selectPhotoTapped} />
                <Send {...props}>
                    <View style={{ flexDirection: 'row', height: '100%', alignContent: 'center' }}>
                        <Icon name='send-o' type='FontAwesome' style={styles.inputIcon} />
                    </View>
                </Send>
            </View>
        );
    }

    renderActions = (props) => {
        return (
            <View style={{
                marginLeft: 10,
                flexDirection: 'row',
                height: 40,
                width: 40,
                borderRadius: 25,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgb(223, 222, 222)'
            }}>
                <Icon name='keyboard-o' type='FontAwesome'
                    style={[styles.inputIcon, { paddingHorizontal: 0, alignSelf: 'center' }]} />
            </View>
        );
    }


    renderAvatar(props) {
        return null;
    }

    renderCustomView(props) {
        return (
            <View style={{ flexDirection: 'column', alignContent: 'center', paddingRight: 10 }}>
                <Avatar {...props} imageStyle={{ borderWidth: 2, borderColor: 'red' }} />
                <Bubble {...props} />
            </View>
        );
    }

    renderBubble(props) {
        const currentUserID = props.currentMessage.user._id;
        let previoustUserIDTemp = 0;
        if (props.previousMessage.user === undefined)
            previoustUserIDTemp = -1;
        else
            previoustUserIDTemp = props.previousMessage.user._id;
        const previoustUserID = previoustUserIDTemp;
        return (
            <View style={{ flexDirection: 'column', alignContent: 'center', paddingRight: 10 }}>
                {/* <View
                    style={[styles.photoContainer,
                    currentUserID == previoustUserID ? { height: 0, marginBottom: 5, } : {},
                    currentUserID == 1 ? {
                        alignSelf: 'flex-end'
                    } : { alignSelf: 'flex-start' }]}>
                    <Image source={photo}
                        style={[styles.photo,
                        currentUserID == previoustUserID ? { height: 0 } : {}]} />
                </View> */}
                <Bubble {...props} />
            </View>
        );
    }

    renderMessage(props) {
        return (
            <View style={{ flexDirection: 'column', alignContent: 'center', paddingRight: 10 }}>
                <Message {...props} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    width: width,
                    ...Platform.select({
                        ios: {
                            height: 20,
                        },
                        android: {
                            height: 0,
                        },
                    }),
                }}>
                    <StatusBar />
                </View>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.pop();
                        }}
                        activeOpacity={0.8}>
                        <Image source={{ uri: "https://cdn2.iconfinder.com/data/icons/mobile-web-apps-1/32/arrow_left-512.png" }}
                            style={{ tintColor: 'black', width: 30, height: 30, resizeMode: 'contain' }} />
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>{this.state.Name}</Text>
                    </TouchableOpacity>
                </View>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(messages) => this.onSend(messages)}
                    user={{
                        _id: this.state.userid
                    }}
                    showUserAvatar={true}
                    renderBubble={this.renderBubble}
                    renderAvatar={this.renderAvatar}
                    renderMessage={this.renderMessage}
                    // renderCustomView={this.renderCustomView}
                    // renderMessageText={this.renderMessage}
                    renderSend={this.renderSend}
                    renderActions={this.renderActions} />

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#ffffff'
    },
    inputIcon: {
        fontSize: 25,
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        width: width,
        padding: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    posImgContainer: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    posImg: {
        tintColor: 'rgb(26, 26, 26)',
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    iconImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    iconContainer: {
        marginLeft: 20,
        marginRight: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: false,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    smallText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    },
    descRow: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width,
        padding: 10
    },
    smallIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: 'black'
    },
    shadowBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    itemSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descGroup: {
        flexDirection: 'column',
        paddingLeft: 10,
        width: width / 2
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    desc: {
        fontSize: 15
    },
    photoContainer: {
        marginBottom: -5,
        width: width / 7,
        height: width / 7,
        borderRadius: width / 14,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    photo: {
        zIndex: 100000,
        width: width / 7,
        height: width / 7,
        borderRadius: width / 14,
        borderColor: 'white',
        resizeMode: 'cover',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: '#dadada'
    }
});
