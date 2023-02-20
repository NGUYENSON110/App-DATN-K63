import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';
import { AuthContext } from '../context/conText';

const comment = ({ navigation, route }) => {
    const { userInfo } = useContext(AuthContext);
    const { hotelApi } = route.params;
    const [comment, setComment] = useState('');
    const [dataComment, setDateComment] = useState([]);
    const abc = new Date();



    const createCommnet = (description, userId, hotelId, date) => {
        axios.post(`http://10.0.2.2:5000/v1/comment`, {
            description,
            userId,
            hotelId,
            date
        })
            .then(res => {
                console.log(res.data);
                Alert.alert("Comment thành công!")
            })
            .catch((error) => {
                console.log("comment false", error);
            })
    }

    useEffect(() => {
        const fetchDataComment = async () => {
            const result = await axios.get(`http://10.0.2.2:5000/v1/comment`);
            setDateComment(result.data);

        };

        fetchDataComment();
    }, []);


    const deleteComment = async (id) => {
        await axios.delete("http://10.0.2.2:5000/v1/comment/" + id)
        .then((r) => {
            Alert.alert('Xóa bình luận thành công!')
            console.log("ress", r)
        })
        .catch((error)=>{
            console.log("error",error)
        })
    };




    return (
        <SafeAreaView>
            <ScrollView>
                <View>

                    <View style={style.iconBack}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Home')
                            }}
                        >
                            <Ionicons name="chevron-back" size={20} />
                            <Text> Back </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.btn_post}
                            onPress={() => {
                                createCommnet(comment, userInfo.user._id, hotelApi._id, abc),
                                    navigation.navigate('Home')
                            }

                            }
                        >
                            <Text> Post</Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <TextInput
                            style={style.input}
                            placeholder="Để lại bình luận đánh giá nhé ! "
                            onChangeText={(value) => setComment(value)}
                        />
                    </View>


                    <View>
                        {dataComment.map((item, index) => (
                            <View style={style.banner}>
                                <View style={style.container}>

                                    <View style={{ marginTop: 6, }}>
                                        <Image source={require('../../Image/icondulich.jpg')} style={style.avatar} />
                                    </View>

                                    <View style={style.container_info}>
                                        <View>
                                            <Text style={{}}>{userInfo.user.username}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 13, }}>15/2</Text>
                                        </View>
                                    </View>
                                    {
                                        userInfo.user.admin ? <View>
                                            <TouchableOpacity style={{ marginLeft: 190, }}

                                                onPress={() =>{
                                                    deleteComment(item._id)
                                                    navigation.navigate('Home')
                                            
                                                }}

                                            >
                                                <Text>Xóa</Text>
                                            </TouchableOpacity>
                                        </View> : <View></View>
                                    }

                                </View>
                                <View style={{ marginLeft: 10, marginBottom: 10, }}>
                                    <Text>{item.description}</Text>
                                </View>
                            </View>
                        ))}
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
        justifyContent: 'space-between',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
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
    },
    btn_post: {
        marginTop: 17,
        marginRight: 20,

    }
})
