import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/conText';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
  return (
    <SafeAreaView >
      <View>
        <LoginLogo />
        <LoginInput />
        <SignIn />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const LoginLogo = () => {
  return (
    <View>
      {/* Logo RingMe */}
      <View style={styles.background}>
        <Image
          source={require('../../Image/imageLogin.png')}
          style={{ width: 400, height: 340 }}
        />
        {/* <View style={styles.LogoRingMe}>
          <Image
            source={require('../../Image/LogoRingMe.png')}
            style={{ width: 150, height: 50 }}
            resizeMode="center"
          />
        </View> */}

        <View style={styles.Login}>
          <Image
            source={require('../../Image/Login.png')}
            style={{ width: 90, height: 80 }}
            resizeMode="center"
          />
        </View>
      </View>
    </View>
  );
};

const LoginInput = () => {

  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [passWord, setPassword] = useState('');
  const [checkValidateUserName, setCheckValidateUserName] = useState(false)
  const [checkValidatepassWord, setCheckValidatepassWord] = useState(false)
  const { login, userToken } = useContext(AuthContext);

  const handleCheckUserName = (text) => {
    let regexUsername = /^[a-z0-9_-]{6,16}$/;
    setUserName(text)
    if(regexUsername.test(text)){
      setCheckValidateUserName(false)
    } else{
      setCheckValidateUserName(true)
    }
  }

  // const handleCheckpassword = (text) =>{
  //   let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  //     setPassword(text)
  //   if(regexPassword.test(text)){
  //     setCheckValidatepassWord(false)
  //   } else {
  //     setCheckValidatepassWord(true)
  //   }
  // }
  





  return (
    <View style={styles.LoginInput}>
      <View style={{ width: windowWidth - 60 }}>

        <TextInput
          placeholder="UserName"
          style={{ color: '#475569' }}
          keyboardType="email-address"
          value={userName}
          // onChangeText={value => setUserName(value)}
          onChangeText={(text)=>handleCheckUserName(text)}
        />
        <View style={styles.UserNameUnderlined}></View>
        {checkValidateUserName ? <Text style={styles.regexusername}>Account requires 6 letters and numbers</Text> : <Text style={styles.regexusername}></Text>}

      </View>

      <View>
        <View
          style={{
            width: windowWidth - 60,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Password"
            style={{ color: '#475569' }}
            secureTextEntry={true}
            value={passWord}
            // onChangeText={value => setPassword(value)}
            onChangeText={(text)=>{
              setPassword(text)
            }}
          />


          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={{ fontSize: 15 }}>Forgot?</Text>

          </TouchableOpacity>
        </View>

        <View style={styles.UserNameUnderlined}></View>
        {/* {checkValidatepassWord ? <Text style={styles.regexusername}>Password requires 1 capital letter and 1 number</Text> : passWord === ''? <Text style={styles.regexusername}></Text> : <Text style={styles.regexusername}></Text> } */}
      </View>

      <View style={{ marginTop: 5 }}>
        <LinearGradient
          colors={['#5EDFFF', '#5EDFFF']}
          style={{ borderRadius: 5 }}>
          <TouchableOpacity

            onPress={() => {
              login(userName, passWord);
            }}
            style={{
              width: windowWidth - 60,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 13,
            }}>
            <Text style={{ color: 'white' }}>Log In</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
      <View>
        <Text>Or continue with</Text>
      </View>

      {/* Login Facebook and Google */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 10,
            borderRadius: 5,
            padding: 13,
            width: windowWidth - 230,
            backgroundColor: '#F1F5F9',
          }}>
          <Image
            source={require('../../Image/LogoGoogle.png')}
            style={{ width: 20, height: 20, marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 10,
            borderRadius: 5,
            padding: 13,
            width: windowWidth - 230,
            marginLeft: 10,
            backgroundColor: '#F1F5F9',
          }}>
          <Image
            source={require('../../Image/LogoFb.png')}
            style={{ width: 20, height: 20, marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Login Apple */}
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderRadius: 5,
            padding: 13,
            width: windowWidth - 60,
            backgroundColor: '#F1F5F9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../Image/LogoApple.png')}
            style={{ width: 20, height: 25, marginLeft: 10 }}
          />
          <Text style={{ marginLeft: 10 }}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>
      {/* Create Account */}
      <View style={{  }}>
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Text
            style={{
              color: '#828282',
            }}>
            Don't have account ?
          </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('CreateNewAcc');
            }}>
            <Text style={{ color: '#101010', marginLeft: 10 }}>Create Now</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity>
            <Text style={{ color: '#101010' }}>Not Now</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LogoRingMe: {
    position: 'absolute',
    top: 100,
    left: 110,
  },
  Login: {
    position: 'absolute',
    left: 152,
    top: 250,
  },
  LoginInput: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  UserNameUnderlined: {
    height: 1,
    backgroundColor: '#CBD5E1',
    marginTop: -3,
  },
  regexusername: {
    color: 'red',
    marginLeft: 2,
    marginTop: 5,
  }
});
