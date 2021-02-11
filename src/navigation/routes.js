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

//components list
// import Loginsignup  from '../components/Login/LoginSignUp'
// import Splash from '../screens/splash/Splash';
import Login from "../components/Login/Login"

import Tab, { TabTop } from "./Tab"


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={Routeskey.SUB} drawerContent={props => <DrawerContent {...props} />}>

      <Drawer.Screen
        name={Routeskey.SUB}
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
          component={Tab}
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
          name={Routeskey.LOGIN}
          component={Login}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />
        <Stack.Screen
          name={Routeskey.DRAWER}
          component={MyDrawer}
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
