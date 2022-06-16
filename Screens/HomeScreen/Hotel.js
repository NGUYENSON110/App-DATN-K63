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
              onPress ={() =>{
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
                    marginLeft: 30,
                    marginTop: 10,
                }}>
                    <Text style={{color:"#FFCE31"}}> 
                        <AntDesign name="star" size={15}/>
                        <AntDesign name="star" size={15}/>
                        <AntDesign name="star" size={15}/>
                        <AntDesign name="star" size={15} color="#C4C4C4"/>
                        <AntDesign name="star" size={15} color="#C4C4C4"/>
                    </Text>
                </View>

                <View style={{
                  flexDirection:'row',
                  marginTop: 10,
                }}>
                    <FontAwesome name="map-marker" size={20} style={{ color:'#8bc8cc'}}/>
                    <Text style={{ marginLeft: 14}}> Nha Trang, Khánh Hòa</Text>
                </View>

                <View style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  

                }}>
                    <Ionicons name="people" size={19} style={{ color:'#8bc8cc'}}/>
                    <Text style={{ marginLeft: 10}}>2 Người Lớn</Text>
                </View>

                <View 
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
      
                  }}
                >
                    <AntDesign name="gift" size={19} style={{ color:'#8bc8cc'}}/>
                    <Text style={{ marginLeft: 10}}>Miễn Phí Nhận Phòng Sớm cho 120 phút</Text>
                </View>

                <View 
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
      
                  }}
                >
                    <AntDesign name="gift" size={19} style={{ color:'#8bc8cc'}}/>
                    <Text style={{ marginLeft: 10}}>Miễn Phí Nhận Phòng Trễ cho 60 phút</Text>
                </View>

                <View 
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
      
                  }}
                >
                    <AntDesign name="gift" size={19} style={{ color:'#8bc8cc'}}/>
                    <Text style={{ marginLeft: 10}}>Miễn Phí Bữa Sáng</Text>
                </View>

                <View 
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
      
                  }}
                >
                    <AntDesign name="gift" size={19} style={{ color:'#8bc8cc'}}/>
                    <Text style={{ marginLeft: 10}}>Miễn Phí Hủy Đặt Phòng</Text>
                </View>
          </View>
              {/* Price */}

              <View style={style.Price}>
                  <View>
                      <Text style={{ fontSize: 20, textDecorationLine:'line-through', color: '#C4C4C4'}}>2.700.000</Text>
                  </View>

                  <View>
                      <Text style={{ fontSize: 28, color: '#FF9900'}}>1.700.000</Text>
                  </View>
              </View>
                

              {/* Button */}
              <View  style={style.Price}>
                    <View>
                        <TouchableOpacity style={style.button}>
                          <Text style={{
                            fontSize: 24,
                          }}>
                            BOOK
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
Hotel:{
    marginLeft: 20,
},
NameHotelText:{
    fontSize: 20,

},
// Price
Price:{
  alignItems:'center',
  justifyContent:'center',
  marginTop: 15,
},
// Button
button:{
  width: 350,
  height: 70,
  backgroundColor: '#FFBC4F',
  borderRadius: 15,
  alignItems:'center',
  justifyContent:'center'
}
});
