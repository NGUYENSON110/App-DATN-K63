import React, {createContext} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    // Register
    const  register = async(userName,email,password) =>{
        await axios.post("http://10.0.2.2:5000/v1/auth/register",{
            userName,
            email,
            password,
        })
        .then(res => {
            let userInfo = res.data;
            console.log(userInfo)
        })
        .catch(error =>{
            console.log(error);
        })
    };     
    
  return (
    <AuthContext.Provider value={register}>{children}</AuthContext.Provider>
  )
};
