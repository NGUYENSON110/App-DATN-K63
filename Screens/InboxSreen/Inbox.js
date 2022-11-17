import React, { Component } from "react";
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
import Position from "react-native/Libraries/Components/Touchable/Position";

const ImgMT = {
  uri: "https://thuvienduan.com/wp-content/uploads/2019/04/muong-thanh-logo.png",
};
const ImgMelisa = {
  uri: "https://www.saokim.com.vn/project/images/gallery/large/thiet-ke-logo-khach-san-melissa1525852457.jpg",
};
const Img = {
  uri: "https://znews-photo.zingcdn.me/w660/Uploaded/Ohunoaa/2016_03_16/nt.jpg",
};


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Inbox = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: 20,
        backgroundColor: "#F2F2F2",
        width: windowWidth,
        height: windowHeight,
      }}
    >
      <ScrollView>
        <View>
          {/* Back */}

          {/* <View style={style.iconBack}>
            <TouchableOpacity style={style.iconBack}
               onPress ={() =>{
                navigation.navigate('Home')
              }}
            >
              <Ionicons name="chevron-back" size={20} />
              <Text> Back </Text>
            </TouchableOpacity>
          </View> */}

          {/* Inbox */}

          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={ImgMT}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
              />
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={style.inboxNameHotel}>
                    Mường Thanh Hotel
                    {`\n`}
                    <Text style={style.inboxDetailHotel}>
                      Gửi bạn hóa đơn đặt hàng, đặt phòng
                    </Text>
                  </Text>
                </View>

                <View style={{ marginLeft: 40, marginTop: 10 }}>
                  <Text style={style.inboxNameTime}>7 Jun</Text>
                </View>
              </View>
            </View> 
          </View>

          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={ImgMelisa}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
              />
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={style.inboxNameHotel}>
                    Khách Sạn Melisa
                    {`\n`}
                    <Text style={style.inboxDetailHotel}>
                      Gửi bạn hóa đơn đặt hàng, đặt phòng
                    </Text>
                  </Text>
                </View>

                <View style={{ marginLeft: 40, marginTop: 10 }}>
                  <Text style={style.inboxNameTime}>8 Jun</Text>
                </View>
              </View>
            </View> 
          </View>

          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={ImgMelisa}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
              />
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={style.inboxNameHotel}>
                    Mường Thanh Hotel
                    {`\n`}
                    <Text style={style.inboxDetailHotel}>
                      Gửi bạn hóa đơn đặt hàng, đặt phòng
                    </Text>
                  </Text>
                </View>

                <View style={{ marginLeft: 40, marginTop: 10 }}>
                  <Text style={style.inboxNameTime}>9 Jun</Text>
                </View>
              </View>
            </View> 
          </View>

          <View style={style.inBox}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={ImgMT}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
              />
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={style.inboxNameHotel}>
                    Mường Thanh Hotel
                    {`\n`}
                    <Text style={style.inboxDetailHotel}>
                      Gửi bạn hình ảnh view biển
                    </Text>
                  </Text>
                </View>

                <View style={{ marginLeft: 40, marginTop: 10 }}>
                  <Text style={style.inboxNameTime}>10 Jun</Text>
                </View>
              </View>

              
            </View> 
            <View style={{ alignItems:'center', marginTop: 13,}}>
                <Image source={Img} style={style.inboxImage}/>
              </View>
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Inbox;

const style = StyleSheet.create({
  // Back

  iconBack: {
    flexDirection: "row",

  },
  Image: {
    width: 350,
    height: 400,
    borderRadius: 10,
  },
  // Inbox
  inBox:{
    width: 350,
    height: 230,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 7,
  
  },
  inBoxx:{
    width: 350,
    height: 60,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 7,
    
  },
  inboxNameHotel: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
    width: 200,
    height: 40,

  },
  inboxNameTime: {
    fontSize: 10,
    color: "#161618",
  },
  inboxDetailHotel: {
    fontSize: 12,
    color: "#161618",
  },
  // Image
  inboxImage:{
    width: 280, 
    height: 150,
    borderRadius: 10,
  }
});
