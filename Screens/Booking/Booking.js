import React, { useState, useEffect, useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/conText';
import axios from 'axios';

function Booking({ navigation, route }) {
    const [date, setDate] = useState(new Date());
    const [overDate, setoverDate] = useState(new Date());
    const [Booking, setBooking] = useState("");
    const { hotelApi } = route.params;
    const { userInfo } = useContext(AuthContext);
    const hotelId = hotelApi._id;
    const phoneUser = userInfo.user.phone;
    const hotelName = hotelApi.name;
    const price = hotelApi.price;




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

    const createBooking = (hotelId, phoneuserName, timego, timeover, hotelName, price) => {
        axios.post(`http://10.0.2.2:5000/v1/booking`, {
            hotelId,
            phoneuserName,
            timego,
            timeover,
            hotelName,
            price
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
    return (
        <View style={{ flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
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

            <View style={{ marginTop: 10, }}>
                <Button style={style.btn_post}
                    onPress={() => {
                        createBooking(hotelId, phoneUser, date.toLocaleString(), overDate.toLocaleDateString(), hotelName, price)
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

})