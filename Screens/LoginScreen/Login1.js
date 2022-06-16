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

import Ionicons from "react-native-vector-icons/Ionicons";



const Login1 = ({ navigation }) => {
  return (
    <SafeAreaView style={style.background}>
      {/* Image Logo Biển */}
      <View>
        <Image
          source={require("../../Image/logobien.png")}
          style={style.imageLogo}
          resizeMode="cover"
        />
      </View>

      {/* Touch Log in , Sign In */}
      <View style={style.LogSign}>
        <TextInput
          style={style.inputemail}
          placeholder="Nhập email của bạn"
          keyboardType="email-address"
          autoCapitalize="none"
        >

        </TextInput>

        <View>

        <TextInput
          style={style.inputpassword}
          placeholder="Nhập password của bạn"
          autoCapitalize="none"
          secureTextEntry={true}
        />
          
       
        </View>

        <TouchableOpacity style={style.LogIn} 
         onPress ={() =>{
           navigation.navigate('Tabs')
         }}
        >
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default Login1;

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#85CCF0",
    alignItems: "center",
    justifyContent:'center',
  },
  imageLogo: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginTop: -30,
  },
  LogSign: {
    marginTop: 40,
  },
  LogIn: {
    width: 250,
    height: 45,
    backgroundColor: "#5EDFFF",
    marginTop: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  inputemail: {
    width: 250,
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
  },
  inputpassword:{
    width: 250,
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
  },
  // Icon eye
  IconEye:{
    
    
  }
});
