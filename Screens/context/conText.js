import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../api/config'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = (username, password) => {
    setIsLoading(true);
    
    axios.post(`http://10.0.2.2:5000/v1/auth/login`, {
      username,
      password
    })
      .then(res => {
        console.log(res.data);
      })
      .catch((error)=>{
        console.log("login false: ", error)
      })
    setUserToken('12312321');
    AsyncStorage.setItem('userToken', '12312321')
    setIsLoading(false);
  }

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
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
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  )
};
