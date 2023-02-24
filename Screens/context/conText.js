import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../api/config';
import { ADD_TO_CART, DELETE_ADD_CART, ADD_VOUCHER } from "./types"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfor] = useState(null);

  const initialState = {
    cartItem: []
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload]
        }
      }

      case ADD_VOUCHER:{
        return{
          cartItem: [state.cartItem, action.payload]
        }
      }

      case DELETE_ADD_CART: {
        return {
          ...state,
          cartItem: state.cartItem.filter(item => item._id !== action.payload)
        }
        
      }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("cardItem", initialState.cartItem)

  const login = (username, password) => {
    setIsLoading(true);

    axios.post(`http://10.0.2.2:5000/v1/auth/login`, {
      username,
      password,
     
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
    if (username == '' || password == '') {
      Alert.alert('Please enter username and password')
    }


  }

  const register = (username, password, phone,email) => {
    axios.post(`http://10.0.2.2:5000/v1/auth/register`, {
      username,
      password,
      phone,
      email
    })
      .then(res => {
        console.log("data", res.data)
      })
      .catch((error) => {
        console.log("resgister false: ", error)
      });
    if (username == '' || password == '' || email == '') {
      Alert.alert('Please enter username and password and email');
    } else {
      Alert.alert('Sign Up Success');
    }
  }

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  }

  // const isLoggedIn = async () => {
  //   try {
  //     setIsLoading(true);
  //     let userInfo = AsyncStorage.getItem('userInfo');
  //     let userToken = AsyncStorage.getItem('userToken');
  //     setUserInfor(userInfo);
  //     setUserToken(userToken);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log("LoggedIn : ", error)
  //   }

  // }

  // useEffect(() => {
  //   isLoggedIn();
  // }, []);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item })
    
  }

  const removeItem = (id) => {
    dispatch({ type: DELETE_ADD_CART, payload: id })
    
  }
  const addVoucher = (item) =>{
    dispatch({type: ADD_VOUCHER , payload:item})
  }

  return (
    <AuthContext.Provider value={{ login, register, logout, isLoading, userToken, userInfo, addToCart, removeItem, addVoucher, cartItem: state.cartItem }}>
      {children}
    </AuthContext.Provider>
  )
};
