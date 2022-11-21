import React, { useContext } from 'react'
import { ActivityIndicator, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Login/AuthStack';
import Tabs from './Tabs/tabs';
import { AuthContext } from "../Screens/context/conText"

function navApp() {

  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", display: 'flex' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );

  }

  
  return (
    <NavigationContainer>
      {userToken !== null ? <Tabs /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default navApp;