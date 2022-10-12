import React from 'react';
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <View>
        <LoginLogo />
        <InputOTP />
        <ButtonLogin />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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

const InputOTP = () => {
  
  
  const [otp, setotp] = useState('01234567');
  
    
    console.log(otp)
  return (
    <View style={styles.LoginInput}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Text style={{color: '#101010', fontSize: 15, padding: 5}}>
            Forgot your password
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{color: '#101010', fontSize: 15, padding: 5}}>
            OTP has been sent to {otp}
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            width: windowWidth - 60,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder=""
            style={{color: '#475569', width: windowWidth - 60}}
            onChangeText={(value) =>setotp(value)}
          />
        </View>
              
        <View style={styles.UserNameUnderlined}></View>
      </View>

      <View style={{marginTop: 15}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#828282'}}>
            Expried in <Text style={{color: 'red'}}> 0 seconds</Text>
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{color: '#828282'}}>Did not receive OTP? </Text>
          <TouchableOpacity>
            <Text style={{color: '#0081DD'}}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ButtonLogin = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.ButtonLogin}>
      <View>
        <LinearGradient
          colors={['#8AB50C', '#2C816B']}
          style={{borderRadius: 5}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SetPassword');
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

      <View style={{marginTop: 15}}>
        <LinearGradient
          colors={['#8AB50C', '#2C816B']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{borderRadius: 5}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{
              width: windowWidth - 60,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 13,
            }}>
            <Text style={{color: 'white'}}>Back</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    backgroundColor: '#000113',
    marginTop: -3,
  },
  ButtonLogin: {
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
});
