import React, { Component, useContext } from 'react';
// import {AuthContext,AuthProvider} from './Screens/context/conText';
import {AuthProvider} from "./Screens/context/conText";
import {AuthContext} from "./Screens/context/conText";
import Nav from './Navigation/navApp';


const App = () => {

  
  return (  
    <AuthProvider>
       <Nav />
    </AuthProvider>

  );
};
export default App;
