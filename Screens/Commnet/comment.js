import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';

const comment = ({ navigation, route }) => {
    const [comment, setComment] = useState('');
   
    console.log("commnet", comment);

    const createCommnet = (comment,userId,hotelId,date) => {
        axios.post(`http://10.0.2.2:5000/v1/comment`,{
            comment, 
            userId,
            hotelId,
            date
        })
        .then (res =>{
            console.log(res.data);
        })
        .catch((error) =>{
            console.log("comment false", error);
        })
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View>

                    <View style={style.iconBack}>
                        <TouchableOpacity style={style.iconBack}
                            onPress={() => {
                                navigation.navigate('Home')
                            }}
                        >
                            <Ionicons name="chevron-back" size={20} />
                            <Text> Back </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text> Post</Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <TextInput
                            style={style.input}
                            placeholder = "Để lại bình luận đánh giá nhé ! "
                            onChangeText={(value) => setComment(value)}
                        />
                    </View>

                    <View style={style.banner}>
                        <View style={style.container}>

                            <View style={{ marginTop: 6, }}>
                                <Image source={require('../../Image/avatar.png')} style={style.avatar} />
                            </View>

                            <View style={style.container_info}>
                                <View>
                                    <Text style={{}}>asdas</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 13, }}>23/09</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginLeft: 10, marginBottom: 10, }}>
                            <Text>adasdsadsadsad</Text>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default comment;

const style = StyleSheet.create({
    // Back
    iconBack: {
        flexDirection: "row",
        marginTop: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    banner: {
        backgroundColor: '#FFFFFF',
        width: '95%',
        marginLeft: 10,
        marginTop: 15,
        borderRadius: 10,
    },
    container: {
        flexDirection: 'row',
        padding: 10,

    },
    container_info: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 15,
    }
})
