import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/routes';
// import Tab from './src/navigation/Tab';
import Routeskey from './src/navigation/routeskey';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <NavigationContainer>


        <Routes initialRouteName={Routeskey.LOGIN} />
      </NavigationContainer>
    </View>
  );
};

export default App;