import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SetPassword = () => {
  return (
    <SafeAreaView>
      <View>
        <LogoLogin />
        <LoginInput />
      </View>
    </SafeAreaView>
  );
};

export default SetPassword;

const LogoLogin = () => {
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

        <View style={styles.LogoLogin}>
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
  return (
    <View style={styles.EnterNewPassword}>
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
            placeholder="Enter new password"
            style={{color: '#475569'}}
            secureTextEntry={true}
          />

          <TouchableOpacity>
            <Image
              source={require('../../Image/Vector1.png')}
              style={{width: 21, height: 15, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>

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
            placeholder="Confirm new password"
            style={{color: '#475569'}}
            secureTextEntry={true}
          />

          <TouchableOpacity>
            <Image
              source={require('../../Image/Vector.png')}
              style={{width: 21, height: 15, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.UserNameUnderlined}></View>
      </View>

      <View style={{marginTop: 25}}>
        <LinearGradient
          colors={['#8AB50C', '#2C816B']}
          style={{borderRadius: 5}}>
          <TouchableOpacity
            style={{
              width: windowWidth - 60,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 13,
            }}>
            <Text style={{color: 'white', fontSize: 15}}>Continue</Text>
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
  LogoLogin: {
    position: 'absolute',
    left: 152,
    top: 270,
  },
  EnterNewPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  UserNameUnderlined: {
    height: 1,
    backgroundColor: '#CBD5E1',
    marginTop: -3,
  },
});
