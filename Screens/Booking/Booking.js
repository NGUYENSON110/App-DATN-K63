import React, { useState, useEffect, useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { View, Text, Button, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/conText';
import axios from 'axios';
import EventBus from 'react-native-event-bus';
import { connect } from 'react-redux';



let listenerVoucher = null;
function Booking({ navigation, route }) {
    const [date, setDate] = useState(new Date());
    const [overDate, setoverDate] = useState(new Date());
    const [Booking, setBooking] = useState("");
    const [currentDate, setcurrentDate] = useState(new Date());
    const [room, setRoom] = useState("");
    const [newPrice , setnewPrice] =useState("");
    const { hotelApi } = route.params;
    const { userInfo, cartItem } = useContext(AuthContext);
    const hotelId = hotelApi._id;
    const phoneUser = userInfo.user.phone;
    const hotelName = hotelApi.name;
    const price = hotelApi.price;
    var mdh = Math.round(Math.random() * 99) + 1;
    
   
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
   
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
        if (date < currentDate) {
            Alert.alert("Xin vui long chon lai ngay gio")
        }
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const onChange1 = (event, selectedDate) => {
        const currentDate = selectedDate;
        setoverDate(currentDate);
    };

    const showMode1 = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker1 = () => {
        showMode('date');
    };

    const showTimepicker1 = () => {
        showMode('time');
    };

    const createBooking = async (hotelId, phoneuserName, timego, timeover, hotelName, price, room, mdh) => {
        await axios.post(`http://10.0.2.2:5000/v1/booking`, {
            hotelId,
            phoneuserName,
            timego,
            timeover,
            hotelName,
            price,
            room,
            mdh
        })
            .then(res => {
                console.log(res.data);
                Alert.alert("Book sucessfully!")
            })
            .catch((error) => {
                console.log("comment false", error);

            })


    }

    useEffect(() => {
        const fetchDataBooking = async () => {
            const result = await axios.get(`http://10.0.2.2:5000/v1/comment`);
            setBooking(result.data);

        };

        fetchDataBooking();
    }, []);

    

    useEffect(() => {
        const fetchDataBooking = async () => {
            const result = await axios.get(`http://10.0.2.2:5000/v1/comment`);
            setBooking(result.data);

        };

        fetchDataBooking();
    }, []);

    useEffect(()=>{
        console.log(" EventBus.getInstance().addListener")
        EventBus.getInstance().addListener("voucher", listenerVoucher = data => {
          var newPrice = hotelApi.price - data
          setnewPrice(newPrice);
        })
        return()=>{
            console.log(" EventBus.getInstance().removeListener")
            EventBus.getInstance().removeListener(listenerVoucher);
        }
    },[])
   

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginTop: 40, width: '70%' }}>
                <Button onPress={showDatepicker} title="Please , choose date " />


            </View>

            <View style={{ marginTop: 20, width: '70%' }}>
                <Button onPress={showTimepicker} title="Please , choose time " />

            </View>

            <View style={{ marginTop: 20, width: '70%' }}>
                <Text style={{ flexDirection: "row", justifyContent: 'center', textAlign: 'center', marginTop: 10, fontSize: 20, }}>Ngày đến :  {date.toLocaleString()}</Text>
            </View>



            <View style={{ marginTop: 40, width: '70%' }}>
                <Button onPress={showDatepicker} title="Please , choose date " />


            </View>

            <View style={{ marginTop: 20, width: '70%' }}>
                <Button onPress={showTimepicker} title="Please , choose time " />

            </View>

            <View style={{ marginTop: 20, width: '70%' }}>
                <Text style={{ flexDirection: "row", justifyContent: 'center', textAlign: 'center', marginTop: 10, fontSize: 20, }}>Ngày đến :  {overDate.toLocaleString()}</Text>
            </View>

            <View>
                <TextInput style={style.input}
                    placeholder="Tổng số phòng đặt"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(value) => setRoom(value)}
                />
            </View>

            <View style={{ marginBottom: 15, width: '70%', flexDirection: 'row', marginLeft: -55 }}>
                <Text style={{ flexDirection: "row", justifyContent: 'center', textAlign: 'center', marginTop: 10, fontSize: 20, }}>Tổng giá tiền :  {newPrice == "" ? hotelApi.price : newPrice }</Text>


                <TouchableOpacity
                    style={{ backgroundColor: '#ed4646', borderRadius: 5, marginLeft: 20, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}
                    onPress={() => {
                        navigation.navigate('voucher',{
                            hotelApi
                        })
                        console.log("aaaa")
                    }}
                >
                    <Text style={{ padding: 5, color: '#FFFFFF' }}>Mã giảm giá</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ backgroundColor: '#ed4646', borderRadius: 5, marginLeft: 20, flexDirection: 'row', alignItems: 'center', marginTop: 10, }}
                    onPress={() => {
                        
                        
                    }}
                >
                    <Text style={{ padding: 5, color: '#FFFFFF' }}>Áp dụng</Text>
                </TouchableOpacity>


            </View>



            <View style={{ marginTop: 10, }}>
                <Button style={style.btn_post}
                    onPress={() => {
                        createBooking(hotelId, phoneUser, date.toLocaleString(), overDate.toLocaleDateString(), hotelName, price, room, mdh)
                    }
                    }
                    title="BOOK"
                >
                </Button>
            </View>
        </View>
    )
}



export default Booking;

const style = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        color: 'black'
    }
})