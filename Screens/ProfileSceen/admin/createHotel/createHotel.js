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
import { launchImageLibrary } from 'react-native-image-picker';

import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const createHotel = () => {
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

export default createHotel;

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
                <View style={styles.iconBack}>
                    <TouchableOpacity style={styles.iconBack}
                        onPress={() => {
                            navigation.navigate('admin')
                        }}
                    >
                        <Ionicons name="chevron-back" size={20} />
                        <Text> Back </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.LogoRingMe}>
                    <Image
                        source={require('../../../../Image/LogoRingMe.png')}
                        style={{ width: 150, height: 50 }}
                        resizeMode="center"
                    />
                </View> */}

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

    const [nameHotel, setNameHotel] = useState("");
    const [imageurl, setImageurl] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");



    const createHotel = (name, imageurl, price, address, phone, description) => {
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

    const Options = {
        title: 'Select Image',
        type: 'library',
        options: {
          maxHeight: 200,
          maxWidth: 200,
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
         
        },
      }

    const uploadImage =  async() => {
        const result = await launchImageLibrary(Options);
        console.log('image:', result)
    }




    // const fetchregister = (username, password, email, admin) => {
    //     axios.post(`http://10.0.2.2:5000/v1/auth/register`, {
    //         username,
    //         password,
    //         email,
    //         admin,
    //     })
    //         .then(res => {
    //             console.log("data", res.data)
    //         })
    //         .catch((error) => {
    //             console.log("resgister false: ", error)
    //         });

    // };



    return (
        <View style={styles.CreateAccInput}>
            <View style={{ width: windowWidth - 60 }}>
                <TextInput
                    placeholder="name Hotel"
                    style={{ color: '#475569' }}
                // value={userName}
                // onChangeText={value => handleCheckUserName(value)}
                />
                <View style={styles.UserNameUnderlined}></View>

            </View>

            <View style={{ width: windowWidth - 60 }}>
                <TouchableOpacity style={{ marginTop: 20, }}
                    onPress={() => uploadImage()}
                >
                    <Text style={{ color: '#475569' }}> Upload Image</Text>
                </TouchableOpacity>

                <View style={styles.UserNameUnderlined}></View>
            </View>

            <View style={{ width: windowWidth - 60 }}>
                <TextInput
                    placeholder="price"
                    style={{ color: '#475569' }}
                    keyboardType="email-address"
                // onChangeText={value => setEmail(value)}
                />
                <View style={styles.UserNameUnderlined}></View>
            </View>

            <View style={{ width: windowWidth - 60 }}>
                <TextInput
                    placeholder="address"
                    style={{ color: '#475569' }}
                    keyboardType="email-address"
                // onChangeText={value => setEmail(value)}
                />
                <View style={styles.UserNameUnderlined}></View>
            </View>

            <View style={{ width: windowWidth - 60 }}>
                <TextInput
                    placeholder="phone"
                    style={{ color: '#475569' }}
                    keyboardType="email-address"
                // onChangeText={value => setEmail(value)}
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
                        placeholder="description"
                        style={{ color: '#475569' }}
                    // onChangeText={value => setPassword(value)}
                    />

                    {/* <TouchableOpacity
                        onPress={() => {
                            setPWHidden(!pwHidden);
                        }}>
                        <Image
                            source={require('../../../../Image/Vector.png')}
                            style={{ width: 21, height: 15, marginRight: 10 }}
                        />
                    </TouchableOpacity> */}
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
                    // onPress={() => {
                    //     fetchregister(, password, email, true)
                    // }}
                    >
                        <Text style={{ color: 'white' }}>Create Hotel</Text>
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
