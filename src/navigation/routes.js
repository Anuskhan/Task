import React, { Component } from 'react';

import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import Routeskey from './routeskey';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationNativeContainer } from '@react-navigation/native';
import DrawerContent from "./DrawerContent"
import { Text, View
} from 'react-native';
//components list
// import Loginsignup  from '../components/Login/LoginSignUp'
import Splash from '../screens/splash/Splash';
import Login from "../components/Login/Login"
import Signup from "../components/Login/Signup"
import Home from "../components/Home/Home"
import Chat from "../components/Chat/Chat" 
import JobLogMain from "../components/Jobs/JobLogMain" 
// import Tab, { TabTop } from "./Tab"


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Settings() {
  return (
      <View style={{backgroundColor:"blue",flex:1,alignContent:"center",justifyContent:"center",alignItems:"center"}}>
          <Text>Settings</Text>
      </View>
  );
}
MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={Routeskey.HOME}
     drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={Routeskey.HOME}
        component={StackNavSub}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>

  );
}
class StackNavSub extends Component {

  render() {
    return (
      <Stack.Navigator
        {...this.props}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,        
        }}>
        <Stack.Screen
          name={Routeskey.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
       

      </Stack.Navigator>
    );
  }
}
class StackNav extends Component {

  render() {
    return (
      <Stack.Navigator
        {...this.props}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name={Routeskey.SPLASH}
          component={Splash}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />
        <Stack.Screen
          name={Routeskey.LOGIN}
          component={Login}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />
        <Stack.Screen
          name={Routeskey.SIGNUP}
          component={Signup}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />
        <Stack.Screen
          name={Routeskey.CHAT}
          component={Chat}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />
        <Stack.Screen
          name={Routeskey.DRAWER}
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routeskey.JOBMAINLOG}
          component={JobLogMain}
          options={{ headerShown: false }}
        />

        
      </Stack.Navigator>
    );
  }
}

export default Routes = () => {
  return (
    <>
      <StackNav />
    </>
  )
}
