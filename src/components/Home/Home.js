import React, {Component} from 'react';
import Routeskey from '../../navigation/routeskey';
// import Alert from "../../utils/Alert"
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../utils/colors';
import styles from './HomeStyle';

import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  Dimensions,
  StyleSheet,
  Share,
} from 'react-native';
import RoutesKey from '../../navigation/routeskey';

export default class Services extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  render() {
    let {loader, secure, password, email} = this.state;

    return (
      <View style={styles.f}>
        <SafeAreaView style={styles.f}>
          <View style={styles.headerView}>
            <Text style={styles.h}>Home</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.margin}>
              <View style={styles.sub}>
                <ScrollView
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}>
                  <View style={styles.row}>
                    <View style={styles.divSub}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate(RoutesKey.JOBMAINLOG);
                        }}>
                        <View style={styles.p}>
                          <View style={styles.div}>
                            {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                            <Image
                              style={styles.image}
                              source={{
                                uri:
                                  'https://image.freepik.com/free-vector/taxi-car-vector-illustration-isolated-white-background-full-editable_71837-17.jpg',
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>Jobs</Text>
                    </View>
                    <View style={styles.divSub}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate(
                            RoutesKey.SERVICE_DETAIL,
                          );
                        }}>
                        <View style={styles.p}>
                          <View style={styles.div}>
                            {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                            <Image
                              style={styles.image}
                              source={{
                                uri:
                                  'https://philadelphia.cbslocal.com/wp-content/uploads/sites/15116066/2011/03/flagdown.jpg?w=420&h=316&crop=1',
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>Flagdown</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.divSub}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate(RoutesKey.CHAT);
                        }}>
                        <View style={styles.p}>
                          <View style={styles.div}>
                            {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                            <Image
                              style={styles.image}
                              source={{
                                uri:
                                  'data:image/png;base64,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',
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>Messages</Text>
                    </View>
                    <View style={styles.divSub}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate(
                            RoutesKey.SERVICE_DETAIL,
                          );
                        }}>
                        <View style={styles.p}>
                          <View style={styles.div}>
                            {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                            <Image
                              style={styles.image}
                              source={{
                                uri:
                                  'https://i.pinimg.com/originals/7f/6c/dc/7f6cdce4c15b2d1548b618ce5573bfd3.png',
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>Plots</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.divSub}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate(
                            RoutesKey.SERVICE_DETAIL,
                          );
                        }}>
                        <View style={styles.p}>
                          <View style={styles.div}>
                            {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                            <Image
                              style={styles.image}
                              source={{
                                uri:
                                  'https://www.gracepointwellness.org/images/root/stevepanic.jpg',
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>Panic</Text>
                    </View>
                    <View style={styles.divSub}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate(
                            RoutesKey.SERVICE_DETAIL,
                          );
                        }}>
                        <View style={{justifyContent: 'center', padding: 5}}>
                          <View style={styles.div}>
                            {/* <FontAwesome name='lock' size={25} color={Colors.cyanBlue} /> */}
                            <Image
                              style={styles.image}
                              source={{
                                uri:
                                  'https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-9/18620379_2001962223365887_2332447508234786861_n.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHNfUHjWfiWXpwD9bJuJQkVqy9HVHVG6amrL0dUdUbpqQL10gIkl6gIeXTdVrcKCI7HS4KRNM9J8VkjnChfzqtw&_nc_ohc=gcTzUCvqMxkAX-oPJx7&_nc_ht=scontent.fkhi8-1.fna&oh=8060556d23859e73d9a5b83db3b5b3b4&oe=60525740',
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>Rider</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
