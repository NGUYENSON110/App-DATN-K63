import React, { useContext, useEffect } from 'react';
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
import { AuthContext } from '../../../context/conText';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Ionicons from "react-native-vector-icons/Ionicons";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const createAccout = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <CreateLogo />
                    <LoginInput />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default createAccout;

const CreateLogo = ({ }) => {
    const navigation = useNavigation();
    return (
        <View>
            {/* Logo RingMe */}

            <View style={styles.background}>

                <Image
                    source={require('../../../../Image/imageLogin.png')}
                    style={{ width: 400, height: 340 }}

                />
                {/* <View style={styles.iconBack}>
                    <TouchableOpacity style={styles.iconBack}
                        onPress={() => {
                            navigation.navigate('admin')
                        }}
                    >
                        <Ionicons name="chevron-back" size={20} />
                        <Text> Back </Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.LogoRingMe}>
                    <Image
                        source={require('../../../../Image/LogoRingMe.png')}
                        style={{ width: 150, height: 50 }}
                        resizeMode="center"
                    />
                </View>

                <View style={styles.CreateLogo}>
                    <Image
                        source={require('../../../../Image/CreateAcc.png')}
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
    // const [value, setValue] = useState(true)
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false);
    // const admin = true;
    const [checkValidateUserName, setCheckValidateUserName] = useState(false)
    const [checkValidatepassWord, setCheckValidatepassWord] = useState(false)
    const [checkValidateemail, setCheckValidateEmail] = useState(false)

    //   const { register } = useContext(AuthContext);

    const handleCheckUserName = (text) => {
        let regexUsername = /^[a-z0-9_-]{6,16}$/;
        // setAdmin(true)
        setuserName(text)
        if (regexUsername.test(text)) {
            setCheckValidateUserName(false)
        } else {
            setCheckValidateUserName(true)
        }
    }

    const handleCheckEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        // setAdmin(true)
        setEmail(text)
        if (reg.test(text) === false) {
            setCheckValidateEmail(false);
        } else {
            setCheckValidateEmail(true);
        }
    }


    console.log('email', email)
    console.log('username', userName)
    console.log('password', password)


    const fetchregister = (username, password, email, admin) => {
        axios.post(`http://10.0.2.2:5000/v1/auth/register`, {
            username,
            password,
            email,
            admin,
        })
            .then(res => {
                console.log("data", res.data)
            })
            .catch((error) => {
                console.log("resgister false: ", error)
            });
        if (username == "" || password == "" || email == "") {
            Alert.alert("Please enter username, password, !")
        }           
    };



    return (
        <View style={styles.CreateAccInput}>
            <View style={{ width: windowWidth - 60 }}>
                <TextInput
                    placeholder="FullName"
                    style={{ color: '#475569' }}
                    value={userName}
                    onChangeText={value => handleCheckUserName(value)}
                />
                <View style={styles.UserNameUnderlined}></View>
                {checkValidateUserName ? <Text style={styles.regexusername}>Account requires 6 letters and numbers</Text> : <Text style={styles.regexusername}></Text>}
            </View>

            <View style={{ width: windowWidth - 60 }}>
                <TextInput
                    placeholder="Email"
                    style={{ color: '#475569' }}
                    keyboardType="email-address"
                    onChangeText={value => setEmail(value)}
                />
                <View style={styles.UserNameUnderlined}></View>
                {checkValidateemail ? <Text style={styles.regexusername}>Email requires 6 letters and numbers</Text> : <Text style={styles.regexusername}></Text>}
            </View>


            {/* <View style={{ width: windowWidth - 60 }}>
                <TextInput
                    placeholder="Admin"
                    style={{ color: '#475569' }}

                    onChangeText={value => setAdmin(value)}
                />
                <View style={styles.UserNameUnderlined}></View>
            </View> */}


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
                            source={require('../../../../Image/Vector.png')}
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
                            fetchregister(userName, password, email, true)
                        }}
                    >
                        <Text style={{ color: 'white' }}>Create Account</Text>
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
        marginTop: 5,

    },
    regexusername: {
        color: 'red',
        marginLeft: 2,
        marginTop: 5,
    },
    iconBack: {
        flexDirection: "row",
        marginTop: 10,
        position: 'relative',
        top: -160,
    },
});
