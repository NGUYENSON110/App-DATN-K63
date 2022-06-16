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

const SignIn = ({navigation}) => {
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
          style={style.inputname}
          placeholder="Your Name"
          keyboardType="email-address"
        >

        </TextInput>

        <TextInput
          style={style.inputemail}
          placeholder="Nhập email của bạn"
          keyboardType="email-address"
        >

        </TextInput>

        <TextInput
          style={style.inputpassword}
          placeholder="Nhập password "
          keyboardType="email-address"
          secureTextEntry={true} 
        >

        </TextInput>

        <TouchableOpacity style={style.LogIn}
          onPress ={() =>{
            navigation.navigate('Login1')
          }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default SignIn;

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#85CCF0",
    alignItems: "center",
    justifyContent: "center",
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
  inputname:{
    width: 250,
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
  },
  inputemail: {
    width: 250,
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: 10,
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
});
