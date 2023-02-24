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


const Sreach = ({ navigation }) => {


  const [searchItem, setDatasreachItem] = useState('')
  const [dataRecommnedHotel, setReCommendHotel] = useState([]);
  const [dataSreachnewItem, setDataSreachnewItem] = useState([]);

  // console.log("1231: ", searchItem)



  // API RECOMMEND HOTEL
  useEffect(() => {
    const fetchDataRecommnedHotel = async () => {
      const result = await axios.get(`http://10.0.2.2:5000/v1/recommendHotel`);
      setReCommendHotel(result.data);
       setDataSreachnewItem(dataRecommnedHotel)
      console.log("aaaa", dataSreachnewItem)
    };
    fetchDataRecommnedHotel();
  }, [])

  const sreachDatahotelname =  (text) => {
    if (text) {
       const newData = dataRecommnedHotel.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : '';
        const itemDataAddress = item.address ? item.address.toUpperCase() : '';
        const itemDatePrice = item.price == text;
        return itemData.includes(text.toUpperCase()) || itemDataAddress.includes(text.toUpperCase()) || itemDatePrice; 
      })
      setDataSreachnewItem(newData);
    } else {
      setDataSreachnewItem(dataRecommnedHotel)
    }
   
  }

  // const sreachDatahoteladdress =  (text) => {
  //   if (text) {
  //      const newData = dataRecommnedHotel.filter(item => {
  //       const itemData = item.address ? item.address.toUpperCase() : ''.toUpperCase();
  //       return itemData.includes(text.toUpperCase());
  //     })
  //     setDataSreachnewItem(newData);
  //     // console.log("newData:",dataSreachnewItem )
  //   } else {
  //     setDataSreachnewItem(dataRecommnedHotel)
  //   }
  //   // console.log("text", text)
  // }

  const sreachDatahotelprice =  (text) => {
    if (text) {
       const newData = dataRecommnedHotel.filter(item => {
          return item.price == text
      })
      setDataSreachnewItem(newData);
     
    } else {
      setDataSreachnewItem(dataRecommnedHotel)
    }
   
  }


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
              onChangeText={(value) => sreachDatahotelname(value)}

            />
            <AntDesign name="search1" size={16} style={style.iconSreach} />
          </View>

          {/* Place, Hotel */}

          <View>

        
            <ScrollView>
              {
                dataSreachnewItem.map((RecommnedHotelApi, index) => (
                  <TouchableOpacity key={index.toString()}
                    onPress={() => {
                      navigation.navigate('RecommendHotel', {
                        RecommnedHotelApi
                      });
                    }}
                  >
                    <View style={style.recommed_hotel}>

                      <View>
                        <Image style={style.recommed_hotel_image}
                          source={{ uri: RecommnedHotelApi.imageurl }}
                        />
                      </View>

                      <View>
                        <Text style={style.recommed_hotel_text}>{RecommnedHotelApi.name}</Text>
                      </View>

                      <View style={{ marginLeft: 10, }}>
                        <Text style={{ fontSize: 13, color: '#A9A9A9' }}>{RecommnedHotelApi.address}</Text>
                      </View>

                      <View style={style.recommed_hotel_border}></View>
                      <View style={{ flexDirection: 'row', }}>

                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10, }}>
                          <Text>{RecommnedHotelApi.price}$</Text>
                        </View>

                        {/* <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, }}>
                          <Icon name="wifi" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                          <Text>2 Beds</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, }}>
                          <Icon name="bed" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                          <Text>2 Beds</Text>
                        </View> */}
                      </View>
                    </View>
                  </TouchableOpacity>
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
