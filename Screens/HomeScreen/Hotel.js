import { faL, fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
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
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons  from "react-native-vector-icons/Octicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";


const Hotel = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* Back */}

          <View style={style.iconBack}

          >
            <TouchableOpacity style={style.iconBack}
              onPress={() => {
                navigation.navigate('Home')
              }}
            >
              <Ionicons name="chevron-back" size={20} />
              <Text> Back </Text>
            </TouchableOpacity>
          </View>

          {/* Hình ảnh Hotel */}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={style.HotelImg}>
              <Image
                source={require("../../Image/melisa.jpg")}
                style={style.ImgMelisa}
              />
            </View>

            <View style={style.HotelImg1}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  source={require("../../Image/melisa1.jpg")}
                  style={style.ImgMelisa1}
                />

                <Image
                  source={require("../../Image/melisa2.jpg")}
                  style={style.ImgMelisa1}
                />

                <Image
                  source={require("../../Image/melisa3.jpg")}
                  style={style.ImgMelisa1}
                />
              </ScrollView>
            </View>
          </View>

          {/* Name HoTel */}

          <View style={style.Hotel}>
            <View style={style.NameHotel}>
              <Text style={style.NameHotelText}> Malisa Khánh Hòa Hotel</Text>
            </View>

            <View style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <View style={{ flexDirection: "row", marginTop: 10, }}>
                <AntDesign name="enviroment" size={15} style={{ color: '#5c7dff' }} />
                <Text style={{ marginLeft: 7, }}>Ádads</Text>
              </View>

              <View>
                <Text style={{ color: "#FFCE31", marginRight: 20, }}>
                  <AntDesign name="star" size={15} />
                  <Text>4.2(84 Reviews)</Text>
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, }}>
              <Text style={{ color: '#5c7dff' }}>$46</Text>
              <Text style={{ marginLeft: 5, }}>Per Night</Text>
            </View>

            <View style={{ marginTop: 5, }}>
              <Text>áddđsđâsdasdasdasdasdasdsad</Text>
            </View>

          </View>
          {/* HOTEL ICON */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10, }}>

            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="feed" size={21} style={{ marginRight: 5, color: '#19190b' }} />
              <Text>Wifi</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="bath" size={21} style={{ marginRight: 5, color: '#19190b' }} />
              <Text>Shower</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <MaterialIcons name="free-breakfast" size={21} style={{ marginRight: 5, color: '#19190b' }} />
              <Text>Breakfast</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="credit-card" size={21} style={{ marginRight: 5, color: '#19190b' }} />
              <Text>Card</Text>
            </View>

          </View>
          {/* Location */}

          <View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10, }}>
              <View>
                <Text style={{ fontSize: 15, fontWeight: '700', }}>Location</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 15, fontWeight: '700', color: '#66ccf2' }}>View Detail</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Image source={require("../../Image/imageAddressGooglemap.jpg")}
                style={{ width: '95%', height: 150, marginLeft: 10, borderRadius: 20, }}
              />
            </View>
          </View>




          {/* Button */}
          <View style={style.Btn_comment_book_container}>


            <View style={{backgroundColor:'#FFFFFF', width:80, marginLeft: 25, marginTop: 10, borderRadius: 30, alignItems:'center'}}>
              <TouchableOpacity style={{padding: 12,}}>
                <Octicons name="comment" size={33} />
              </TouchableOpacity>
            </View>


            <View>
              <TouchableOpacity style={style.button_Book}>
                <Text style={{
                  fontSize: 24,
                  color:'#FFFFFF'
                }}>
                  BOOK NOW
                </Text>
              </TouchableOpacity>
            </View>

          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Hotel;

const style = StyleSheet.create({
  // Back
  iconBack: {
    flexDirection: "row",
    marginTop: 10,
  },
  // Image Hotel
  ImgMelisa: {
    width: 350,
    height: 150,
    borderRadius: 15,
  },
  ImgMelisa1: {
    width: 150,
    height: 70,
    borderRadius: 15,
    marginLeft: 5,

  },
  HotelImg: {
    marginTop: 10,
  },
  HotelImg1: {
    marginTop: 7,
    marginLeft: 15,
    height: 80,
  },
  //   Name Hotel
  Hotel: {
    marginLeft: 20,
  },
  NameHotelText: {
    fontSize: 20,

  },
  // Price


  // Button
  button_Book: {
    width: 230,
    height: 50,
    backgroundColor: '#5171e9',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:15,
    marginTop:15,
  },
  Btn_comment_book_container:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
