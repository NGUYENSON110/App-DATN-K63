//

import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, Animated, View } from 'react-native';
import Home from '../../Screens/HomeScreen/Home';
import DetailsEx from '../../Screens/HomeScreen/DetailsEx';
import Hotel from '../../Screens/HomeScreen/Hotel';
import Inbox from '../../Screens/InboxSreen/Inbox';
import Profile from '../../Screens/ProfileSceen/Profile';
import RecommendHotel from '../../Screens/HomeScreen/RecommendHotel';
// import ScreachScreenDetails from '../../Screens/SearchScreen/SreachScreenDetails/ScreachScreenDetails';
import Sreach from '../../Screens/SearchScreen/SreachScreen';
import Octicons from "react-native-vector-icons/Octicons";
import Favourite from "../../Screens/ProfileSceen/myFavourite/Favourite";
import admin from '../../Screens/ProfileSceen/admin/admin';
import createAccout from '../../Screens/ProfileSceen/admin/createAccount/createAccout';
import createAddress from '../../Screens/ProfileSceen/admin/createAddress/createAddress';
import createHotel from '../../Screens/ProfileSceen/admin/createHotel/createHotel';
import comment from '../../Screens/Commnet/comment';
import booking from "../../Screens/Booking/Booking";
import BookingHotel from "../../Screens/ProfileSceen/Booking/BookingHotel";


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
      <Stack.Screen name="RecommendHotel" component={RecommendHotel} />
      <Stack.Screen name="admin" component={admin} />
      <Stack.Screen name="booking" component={booking} />
      {/* <Stack.Screen name="ScreachScreenDetails" component={ScreachScreenDetails} /> */}
      <Stack.Screen name="Favourite" component={Favourite} />
      <Stack.Screen name="createAccout" component={createAccout} />
      <Stack.Screen name="createAddress" component={createAddress} />
      <Stack.Screen name="createHotel" component={createHotel} />
      <Stack.Screen name="comment" component={comment} />
      <Stack.Screen name="BookingHotel" component={BookingHotel} />
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
