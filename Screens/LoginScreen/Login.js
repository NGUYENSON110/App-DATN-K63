import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


import IMG from '../../Image/logobien.png'
const Login = ( {navigation}) => {


  return (
    <SafeAreaView style={style.background}>
     
    
     {/* Image Logo Biển */}
        <View>
          <Image source={IMG} style={style.imageLogo} resizeMode="cover"/>
        </View>


     {/* Touch Log in , Sign In */}
        <View style={style.LogSign}>
            <TouchableOpacity style={style.LogIn} 
              onPress ={() =>{
                navigation.navigate('Login1')
              }}
            >
                <Text>Log In</Text>                
            </TouchableOpacity>

            <TouchableOpacity style={style.SignIn}
               onPress ={() =>{
                navigation.navigate('SignIn')
              }}
            >
                <Text>Sign In</Text>                
            </TouchableOpacity>

        </View>

    </SafeAreaView>
  );
}
export default Login;

const style = StyleSheet.create({
  background: {
      flex:1,
      backgroundColor: '#85CCF0',
      alignItems:'center',
      justifyContent:'center',
  },
  imageLogo:{
      width: 250,
      height: 250,
      borderRadius: 15,
      marginTop: -30,
  },
  LogSign:{
    marginTop: 40,
  },
  LogIn:{
      width: 250,
      height: 45,
      backgroundColor:'#5EDFFF',
      marginTop: 30,
      borderRadius: 8,
      alignItems:'center',
      justifyContent:'center',

  },
  SignIn:{
    width: 250,
    height: 45,
    backgroundColor:'#5EDFFF',
    marginTop: 10,
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
  }
});
