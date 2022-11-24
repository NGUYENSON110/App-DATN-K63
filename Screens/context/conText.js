import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../api/config';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfor] = useState(null);


  const login = (username, password) => {
    setIsLoading(true);

    axios.post(`http://10.0.2.2:5000/v1/auth/login`, {
      username,
      password
    })
      .then(res => {
        // console.log("data", res.data);
        setUserInfor(res.data);
        setUserToken(res.data.token)
        AsyncStorage.setItem('userInfo', JSON.stringify(res.data))
        AsyncStorage.setItem('userToken', res.data.token)

        // console.log("email", res.data.user.email)
      })
      .catch((error) => {
        console.log("login false: ", error)
      })
   
    setIsLoading(false);
    if(username == '' || password == ''){
        Alert.alert('Please enter username and password')
    }
  } 

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = AsyncStorage.getItem('userInfo');
      let userToken = AsyncStorage.getItem('userToken');

      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log("LoggedIn : ", error)
    }

  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  )
};
