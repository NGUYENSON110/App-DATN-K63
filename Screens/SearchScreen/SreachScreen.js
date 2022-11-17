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


const Sreach = ({ navigation }) => {

  const [dataHotel, setdataHotel] = useState([]);

  // API HOTEL
  useEffect(() => {
    const fetchDataHotel = async () => {
      const result = await axios.get(`http://10.0.2.2:5000/v1/hotel`);
      setdataHotel(result.data);
      // console.log('222222', dataHotel);
    };
    fetchDataHotel();
  }, []);


  return (
    <SafeAreaView style={{
      marginTop: 20,
    }}>
      <ScrollView>
        <View>
          {/* Banner 1  */}
          <View style={style.banner}>
            <View style={style.bannerFormText}>
              <Text style={style.bannerText}>Seach Places</Text>
            </View>

            <View style={style.bannerPlus}>
              <TouchableOpacity>
                <AntDesign name="plus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Thanh ReSreach */}

          <View style={style.ReSreach}>

            <TextInput
              style={style.textInput}
              placeholder="Seacrh hotel "
              onChangeText={(value) => {
                searchItem(value)
              }}
            />
            <AntDesign name="search1" size={16} style={style.iconSreach} />
          </View>

          {/* Place, Hotel */}

          <View>

            <View style={{marginTop: 10,marginLeft:10,}}>
              <Text style={{fontSize: 15, fontWeight: '700',}}> Popular Hotels </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={style.recommed_hotel}>

                <View>
                  <Image style={style.recommed_hotel_image}
                    source={require('../../Image/hanoi.jpg')}
                  />
                </View>

                <View style={{position:'absolute', backgroundColor:'#FFFFFF', right:0, margin: 10, borderRadius: 10,}}>
                <View>
                    <Text style={style.HotelStar}>
                      <AntDesign name="star" size={16} />
                      <Text style={style.Hotel_start_reviews} >
                        4.9 
                      </Text>
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                  <View>
                    <Text style={style.recommed_hotel_text}>Grand Park City Hotel</Text>
                  </View>

                  <View style={{color:'#4e93ff', marginRight: 15,marginTop: 10,}}>
                    <Text>$44</Text>
                  </View>

                </View>

                <View>
                  <Text>adsdd</Text>
                </View>

                <View style={style.recommed_hotel_border}></View>
                <View style={{ flexDirection: 'row', }}>

                  <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, }}>
                    <Icon name="bed" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                    <Text>2 Beds</Text>
                  </View>

                  <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, }}>
                    <Icon name="wifi" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                    <Text>2 Beds</Text>
                  </View>

                  <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, }}>
                    <Icon name="bed" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                    <Text>2 Beds</Text>
                  </View>
                </View>
              </View>

            </ScrollView>
          </View>


          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Sreach;

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
    height: 230,
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
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  
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
