import React, { useContext, useState, useEffect } from 'react'
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native'
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
            price: 10,
        },
        {
            name: "voucher2",
            price: 9,
        },
        {
            name: "voucher3",
            price: 8,
        },
        {
            name: "voucher4",
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
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        EventBus.getInstance().fireEvent("voucher", item.price)
                                        navigation.goBack()

                                    }}
                                >
                                    <Text>{item.name}</Text>
                                    <Text>{item.price}</Text>
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