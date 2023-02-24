import React, { Component, useState, useEffect } from "react";
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
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { cos, Value } from "react-native-reanimated";


const BookingHotel = ({ navigation }) => {


    const [hotel, setHotel] = useState([])



    // API RECOMMEND HOTEL
    useEffect(() => {
        const fetchDataBookingHotel = async () => {
            const result = await axios.get(`http://10.0.2.2:5000/v1/booking`);
            setHotel(result.data);
            // console.log('aaaa', hotel)
        };
        fetchDataBookingHotel();
    }, [])

    console.log("databooking", hotel.phoneuserName)

    // DELETE ROOM 
    const deleteBooking = async (id) => {
        await axios.delete(`http://10.0.2.2:5000/v1/booking/${id}`)
        .then((r) => {
            Alert.alert('Huỷ Thành Công!')
            
        })
        .catch((error)=>{
            console.log("error",error)
        })
    };

   
    return (
        <SafeAreaView style={{
            marginTop: 20,
        }}>
            <ScrollView>
                <View>

                    <View>
                        <ScrollView>

                            {
                                hotel.map((item, index) => (
                                    <View style={style.recommed_hotel}>

                                        <View>
                                            <Image style={style.recommed_hotel_image}
                                                source={require("../../../Image/melisa1.jpg")}
                                            />
                                        </View>

                                        <View>
                                            <Text style={style.recommed_hotel_text}>{item.hotelName}</Text>
                                            <Text style={style.recommed_hotel_text}>Tổng giá : {item.price} $</Text>
                                            <Text style={style.recommed_hotel_text}>Số điện thoại : {item.phoneuserName}</Text>
                                            <Text style={style.recommed_hotel_text}>Tổng số phòng đặt : {item.room}</Text>
                                            <Text style={style.recommed_hotel_text}>Mã đặt phòng : {item.mdh}</Text>
                                        </View>


                                        <View>
                                            <Text style={style.recommed_hotel_text}>Ngày đến :{item.timego}</Text>
                                            <Text style={style.recommed_hotel_text}>Ngày đi : {item.timeover}</Text>
                                        </View>

                                        <View style={{ marginLeft: 10, }}>
                                            <Text style={{ fontSize: 13, color: '#A9A9A9' }}>{item.phoneusername}</Text>
                                        </View>
                                        
                                        <View style={{backgroundColor:'#ed4646', width: '25%', flexDirection:'row', justifyContent:'center', alignItems:'center', padding: 5, borderRadius: 5}}>
                                            <TouchableOpacity
                                                style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                                                onPress={()=>{
                                                    deleteBooking(item._id)
                                                    console.log('itemid', item._id)
                                                    // navigation.navigate('Home')
                                                }}
                                            >
                                                <Text style={{color:'#FFFFFF'}}>Hủy Đặt </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>


                    {/*  */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default BookingHotel;

const style = StyleSheet.create({
    // Banner
    banner: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    bannerFormText: {
        marginLeft: 10,
    },
    bannerText: {
        fontSize: 18,
    },
    bannerPlus: {
        marginRight: 15,
    },
    // Style textInput
    ReSreach: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },
    textInput: {
        width: 350,
        height: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
    iconSreach: {
        position: 'absolute',
        right: 40,
    },
    recommed_hotel: {
        backgroundColor: "#FFFFFF",
        width: 350,
        marginLeft: 20,
        marginTop: 15,
        borderRadius: 17,
    },
    Hotel_start_reviews: {
        fontSize: 13,
        color: '#5c7dff',
    },
    recommed_hotel_image: {
        width: '100%',
        height: 130,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    recommed_hotel_text: {
        color: '#453F3F',
        marginTop: 5,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '700',
    },
    recommed_hotel_border: {
        backgroundColor: '#bed2d7',
        width: '90%',
        height: 1,
        marginTop: 5,
        marginLeft: 15,
    },
    HotelStar: {
        color: '#f2f63c',
        margin: 5,
    },
    Hotel_start_reviews: {
        fontSize: 13,
        color: '#5c7dff'
    },

});
