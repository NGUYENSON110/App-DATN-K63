import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screens/LoginScreen/Login';
import ForgotPassword from '../../Screens/LoginScreen/ForgotPassword';
import CreateNewAcc from '../../Screens/LoginScreen/CreateNewAcc';
import SetPassword from '../../Screens/LoginScreen/setPassword';

const Stack = createNativeStackNavigator();
 
function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CreateNewAcc" component={CreateNewAcc} />
            <Stack.Screen name="setPassword" component={SetPassword} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack