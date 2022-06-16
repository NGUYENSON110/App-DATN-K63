import React, {Component} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Tabs from './Navigation/tabs';
import Login from './Screens/LoginScreen/Login';
import Login1 from './Screens/LoginScreen/Login1';
import SignIn from './Screens/LoginScreen/SignIn';
import Hotel from './Screens/HomeScreen/Hotel';
import Switch  from './Screens/ImageLocationScreen/Switch';
import Switch1  from './Screens/ImageLocationScreen/Switch1';
import Switch2  from './Screens/ImageLocationScreen/Switch2';
import Switch3  from './Screens/ImageLocationScreen/Switch3';
import DetailsEx from './Screens/HomeScreen/DetailsEx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/HomeScreen/Home'
import Index from './Screens/Test/index'
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <Inbox/>
    <Index />
    // <Explore/>
    // <Home />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Login1" component={Login1} />
    //     <Stack.Screen name="Tabs" component={Tabs} />
    //     <Stack.Screen name="SignIn" component={SignIn} />
    //     <Stack.Screen name="DetailsEx" component={DetailsEx} />
    //     <Stack.Screen name="Hotel" component={Hotel} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Saved1 />
    // <Indexx />
    // <DetailsEx />
    // <Hotel />
    // <Login/>
    // <Login1/>
    // <SignIn/>
  );
};
export default App;
