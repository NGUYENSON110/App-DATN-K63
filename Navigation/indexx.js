import React, { Component } from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hotel from "../Screens/Hotel";
import DetailsEx from "../Screens/DetailsEx";
import Home from "../Screens/Home";
const Indexx = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
        <Stack.Screen name="Hotel" component={Hotel} />
        <Stack.Screen name="DetailsEx" component={DetailsEx} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Indexx;
