import React, { useContext, useState, useEffect } from 'react'
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from "../context/conText";
import axios from 'axios';
import EventBus from 'react-native-event-bus'

function voucher({ navigation, route }) {
    const { addVoucher } = useContext(AuthContext);
    const { hotelApi } = route.params;
    const [booking, setBooking] = useState([])
    console.log("hotel", hotelApi)

    const voucher = [
        {
            name: "voucher1",
            image:"https://sakukostore.com.vn/Data/Sites/1/News/2699/720x378px_ta%CC%89i-app-voucher-30k.jpg",
            price: 1,
        },
        {
            name: "voucher2",
            image:"https://s24.com.vn/uploads/news/images/62eb3ca817379.jpg",
            price: 2,
        },
        {
            name: "voucher3",
            image:"https://stcv4.hnammobile.com/fileext/id-voucher-vinid.jpg",
            price: 3,
        },
        {
            name: "voucher4",
            image:'https://assets.grab.com/wp-content/uploads/sites/11/2021/09/01234215/1200x600-182.jpg',
            price: 4,
        },
        {
            name: "voucher5",
            image:'https://assets.grab.com/wp-content/uploads/sites/11/2021/09/01234215/1200x600-182.jpg',
            price: 5,
        },
        {
            name: "voucher6",
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZm347tvVgbmKEvJ3dqLEgsZhazhc0aVCEIg&usqp=CAU',
            price: 6,
        },
        {
            name: "voucher7",
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLc81-q5YedhtG-3mWZPehlC5dAbn3VxjyA&usqp=CAU',
            price: 7,
        },


    ]

    const updateBooking = async (price) => {
        await axios.put(`http://10.0.2.2:5000/v1/hotel/` + hotelApi._id, {
            price
        })
            .then(res => {
                console.log(res.data);

            })
            .catch((error) => {
                console.log("comment false", error);

            })
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    {
                        voucher.map((item, index) => (
                            <View style={{marginTop: 10,}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        EventBus.getInstance().fireEvent("voucher", item.price)
                                        navigation.goBack()

                                    }}
                                    style={{flexDirection:'column', alignItems:'center'}}
                                >
                                    <Image source={{uri: item.image}} style={{width:'90%',height:120, borderRadius: 10,}}/>
                                    <Text style={{fontSize:17,marginTop:5,}}>{item.name}</Text>
                                    <Text  style={{fontSize:17,marginTop:5,}}>Giá tiền giảm giá : {item.price}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default voucher