//

import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, Animated, View } from 'react-native';
import Home from '../../Screens/HomeScreen/Home';
import DetailsEx from '../../Screens/HomeScreen/DetailsEx';
import Hotel from '../../Screens/HomeScreen/Hotel';
import Inbox from '../../Screens/InboxSreen/Inbox';
import Feather from 'react-native-vector-icons/Feather';
import Profile from '../../Screens/ProfileSceen/Profile';

import Sreach from '../../Screens/SearchScreen/SreachScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from "react-native-vector-icons/Octicons"
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailsEx" component={DetailsEx} />
      <Stack.Screen name="Hotel" component={Hotel} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#5EDFFF',
            tabBarStyle: {
              height: 55,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Octicons name="home" color={color} size={26} />
              ),
            }}></Tab.Screen>

          <Tab.Screen
            name="Tago"
            component={Sreach}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Octicons name="codescan-checkmark" size={25} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Inbox"
            component={Inbox}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Octicons name="cross-reference" size={25} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Octicons name="person" size={25} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Tabs;

const style = StyleSheet.create({
  Tabar: {},
  item: {},
  tinyLogo: {
    width: 40,
    height: 40,
  },
  icon_chuyenbay: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  icon_profile: {
    width: 23,
    height: 23,
  },
  icon_giohang: {
    width: 35,
    height: 35,
  },
});
