import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../context/conText';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
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
          source={require('../../Image/Subtract.png')}
          style={{width: 400, height: 340}}
        />
        <View style={styles.LogoRingMe}>
          <Image
            source={require('../../Image/LogoRingMe.png')}
            style={{width: 150, height: 50}}
            resizeMode="center"
          />
        </View>

        <View style={styles.Login}>
          <Image
            source={require('../../Image/Login.png')}
            style={{width: 90, height: 80}}
            resizeMode="center"
          />
        </View>
      </View>
    </View>
  );
};

const LoginInput = () => {
  const navigation = useNavigation();
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <View style={styles.LoginInput}>
      <View style={{width: windowWidth - 60}}>
        
        <TextInput
          placeholder="UserName"
          style={{color: '#475569'}}
          keyboardType="email-address"
          onChangeText={value => setuserName(value)}
        />
        <View style={styles.UserNameUnderlined}></View>
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
            style={{color: '#475569'}}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={{fontSize: 15}}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.UserNameUnderlined}></View>
      </View>

      <View style={{marginTop: 25}}>
        <LinearGradient
          colors={['#8AB50C', '#2C816B']}
          style={{borderRadius: 5}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tabs');
            }}
            style={{
              width: windowWidth - 60,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 13,
            }}>
            <Text style={{color: 'white'}}>Log In</Text>
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
      style={{alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
      <View>
        <Text>Or continue with</Text>
      </View>

      {/* Login Facebook and Google */}
      <View style={{flexDirection: 'row'}}>
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
            style={{width: 20, height: 20, marginLeft: 20}}
          />
          <Text style={{marginLeft: 10}}>Google</Text>
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
            style={{width: 20, height: 20, marginLeft: 20}}
          />
          <Text style={{marginLeft: 10}}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Login Apple */}
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 10,
            borderRadius: 5,
            padding: 13,
            width: windowWidth - 60,
            backgroundColor: '#F1F5F9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../Image/LogoApple.png')}
            style={{width: 20, height: 25, marginLeft: 20}}
          />
          <Text style={{marginLeft: 10}}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>
      {/* Create Account */}
      <View style={{marginTop: 5}}>
        <View style={{flexDirection: 'row', padding: 5}}>
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
            <Text style={{color: '#101010', marginLeft: 10}}>Create Now</Text>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={{color: '#101010'}}>Not Now</Text>
          </TouchableOpacity>
        </View>
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
});
