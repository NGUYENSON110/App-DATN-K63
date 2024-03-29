import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/conText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateNewAcc = () => {
  return (
    <SafeAreaView>
      <View>
        <CreateLogo />
        <LoginInput />
        <SignIn />
      </View>
    </SafeAreaView>
  );
};

export default CreateNewAcc;

const CreateLogo = () => {
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

        <View style={styles.CreateLogo}>
          <Image
            source={require('../../Image/CreateAcc.png')}
            style={{ width: 200, height: 80 }}
            resizeMode="center"
          />
        </View>
      </View>
    </View>
  );
};

const LoginInput = () => {
  const [pwHidden, setPWHidden] = useState(true);
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checkValidateUserName, setCheckValidateUserName] = useState(false);
  const [checkValidatepassWord, setCheckValidatepassWord] = useState(false);
  const [checkValidateemail, setCheckValidateEmail] = useState(false);
  const [phone,setPhone] =useState("");
  const { register } =  useContext(AuthContext);
  const navigation = useNavigation();


  const handleCheckEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmail(text)
    if (reg.test(text) === false) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  }

  const handleCheckpassword = (text) => {
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    setPassword(text)
    if (regexPassword.test(text)) {
      setCheckValidatepassWord(false)
    } else {
      setCheckValidatepassWord(true)
    }
  }
  // console.log('email', email)
  // console.log('username', userName)
  // console.log('password', password)



  return (
    <View style={styles.CreateAccInput}>
      <View style={{ width: windowWidth - 60 }}>
        <TextInput
          placeholder="FullName"
          style={{ color: '#475569' }}
          keyboardType="email-address"
          value={userName}
          onChangeText={value => setuserName(value)}
        />
        <View style={styles.UserNameUnderlined}></View>
        {checkValidateUserName ? <Text style={styles.regexusername}>Account requires 6 letters and numbers</Text> : <Text style={styles.regexusername}></Text>}
      </View>
      <View style={styles.UserNameUnderlined}></View>
      <View style={{ width: windowWidth - 60 }}>
        <TextInput
          placeholder="Phone number"
          style={{ color: '#475569' }}
          keyboardType="email-address"
          onChangeText={value => setPhone(value)}
        />
        <View style={styles.UserNameUnderlined}></View>
      </View>

      <View style={{ width: windowWidth - 60 }}>
        <TextInput
          placeholder="Email address "
          style={{ color: '#475569' }}
          keyboardType="email-address"
          onChangeText={value => setEmail(value)}
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
            style={{ color: '#475569' }}
            secureTextEntry={pwHidden ? true : false}
            onChangeText={value => setPassword(value)}
          />

          <TouchableOpacity
            onPress={() => {
              setPWHidden(!pwHidden);
            }}>
            <Image
              source={require('../../Image/Vector.png')}
              style={{ width: 21, height: 15, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.UserNameUnderlined}></View>
      </View>

      <View style={{ marginTop: 25 }}>
        <LinearGradient
          colors={['#5EDFFF', '#5EDFFF']}
          style={{ borderRadius: 5 }}>
          <TouchableOpacity
            style={{
              width: windowWidth - 60,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 13,
            }}
            onPress={() => {
              register(userName, password, phone,email)
              navigation.navigate('Login');
            }}
          >
            <Text style={{ color: 'white' }}>Create Account</Text>
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
      <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Text
            style={{
              color: '#828282',
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#101010', marginLeft: 10 }}>Login</Text>
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
  CreateLogo: {
    position: 'absolute',
    left: 100,
    top: 270,
  },
  CreateAccInput: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
