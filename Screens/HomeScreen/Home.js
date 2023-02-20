import React, { useContext, useEffect, useState } from 'react';
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
} from 'react-native';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Switch from '../ImageLocationScreen/Switch';
import Switch1 from '../ImageLocationScreen/Switch1';
import Switch2 from '../ImageLocationScreen/Switch2';
import Switch3 from '../ImageLocationScreen/Switch3';
import axios from 'axios';
import APIURL from "../api/config"
import catChuoi from '../Catchuoi/catChuoi';
import { AuthContext } from '../context/conText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const NameLocals = ['Nha trang', 'HCM', 'Đà Lạt', 'Đà Nẵng'];

const Home = ({ navigation }) => {
  const [NameLocalType, setNameLocalType] = useState("Nha Trang");
  const [dataAddress, setDataAddress] = useState([]);
  const [dataHotel, setdataHotel] = useState([]);
  const [dataVoucher, setVoucher] = useState([]);
  const [dataRecommnedHotel, setReCommendHotel] = useState([]);
  const { userInfo } = useContext(AuthContext);


  // console.log("userInfo12321: ", userInfo.username)
  // console.log("email: ", userInfo)

  // API ADDRESS
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://10.0.2.2:5000/v1/address`);
      setDataAddress(result.data);
      console.log('111111111', result.data.name);
    };
    fetchData();
  }, []);

  // API HOTEL
  useEffect(() => {
    const fetchDataHotel = async () => {
      const result = await axios.get(`http://10.0.2.2:5000/v1/hotel`);
      setdataHotel(result.data);
      // console.log('222222', dataHotel);
    };
    fetchDataHotel();
  }, []);


  // API VOUCHER
  useEffect(() => {
    const fetchDataVoucher = async () => {
      const result = await axios.get(`http://10.0.2.2:5000/v1/voucher`);
      setVoucher(result.data);
      // console.log('333333', dataVoucher);
    };
    fetchDataVoucher();
  }, []);

  // API Recommend Hotel
  useEffect(() => {
    const fetchDataRecommnedHotel = async () => {
      const result = await axios.get(`http://10.0.2.2:5000/v1/recommendHotel`);
      setReCommendHotel(result.data);
      // console.log('RecommnedHotel : ', dataRecommnedHotel);
    };
    fetchDataRecommnedHotel();
  }, [])

  return (
    <SafeAreaView style={style.backGround}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* Logo and Name */}

          <View style={style.LogoName}>
            <View style={style.textHi}>
              <View>
                <Text style={style.textHello}>Hello,</Text>
              </View>

              <View>
                <Text style={style.textName}>{userInfo.user.username}</Text>
              </View>
            </View>

            <View style={style.textAvatar}>
              <Image
                style={style.textImgAva}
                source={require('../../Image/icondulich.jpg')}
              />
            </View>
          </View>

          {/* Thanh ReSreach */}

          <View style={style.ReSreach}>

            <TextInput
              style={style.textInput}
              placeholder="Seacrh hotel"
            // onChangeText={(value) => {
            //   searchItem(value)
            // }}
            />
            <AntDesign name="search1" size={16} style={style.iconSreach} />
          </View>

          {/* Story */}
          <View style={style.Story}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dataAddress.map((NameLocal, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  style={{
                    width: 120,
                    height: 40,
                    backgroundColor:
                      NameLocal.name === NameLocalType ? '#5EDFFF' : '#FFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginLeft: 20,
                  }}
                  onPress={() => {
                    setNameLocalType(NameLocal.name);
                  }}>
                  <Text>{NameLocal.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {/*  Experience and Image*/}

          <View>
            <View style={style.Experience}>
              <Text style={style.textExperience}> Experience </Text>
            </View>

            <View>
              {/* <Switch /> */}
              {NameLocalType == 'Nha trang' ? <Switch /> : null}
              {NameLocalType == 'Hồ Chí Minh' ? <Switch1 /> : null}
              {NameLocalType == 'Hà Nội' ? <Switch2 /> : null}
              {NameLocalType == 'Đà Nẵng ' ? <Switch3 /> : null}
            </View>
          </View>



          {/* Hotel */}
          <View>
            <View style={style.Experience}>
              <Text style={style.textExperience}> Hotel </Text>
            </View>

            <View >
              <ScrollView showsHorizontalScrollIndicator={false} >
                {dataHotel.map((hotelApi, index) => (
                  <View style={{ marginTop: 10, }}>
                    <TouchableOpacity
                      key={index.toString()}
                      style={style.HotelTouch}
                      onPress={() => {
                        navigation.navigate('Hotel', {
                          hotelApi
                        });
                      }}>
                      <Image
                        source={{
                          uri: hotelApi.imageurl,
                        }}
                        style={style.HotelTouchImage}
                      />
                      <View style={style.HotelText}>
                        <View>
                          <Text style={style.HotelName}>{hotelApi.name}</Text>
                        </View>


                        <View style={{ marginLeft: 10, }}>
                          <Text style={{ fontSize: 12, }}>{hotelApi.address}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                          <View>
                            <Text style={style.HotelPrice}>
                              ${hotelApi.price}/Night
                            </Text>
                          </View>

                          <View>
                            <Text style={style.HotelStar}>
                              <AntDesign name="star" size={16} />
                              <Text style={style.Hotel_start_reviews} >
                                4.9 (160 Reviews)
                              </Text>
                            </Text>
                          </View>

                        </View>

                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>



          {/* Recomended Hotel */}
          <View>

            <View style={style.Experience}>
              <Text style={style.textExperience}> Recomended Hotel </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                dataRecommnedHotel.map((RecommnedHotelApi, index) => (
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
                          <Icon name="bed" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                          <Text>{RecommnedHotelApi.bed}bed</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, }}>
                          <Icon name="wifi" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                          <Text>Wifi</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 10, }}>
                          <Icon name="child" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                          <Text>Free</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              }

            </ScrollView>
          </View>

          {/* Voucher */}

          {/* <View>
            <View style={style.Experience}>
              <Text style={style.textExperience}> Voucher </Text>
            </View>

            <View style={style.Voucher}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dataVoucher.map((voucherApi, index) => (

                  <View style={style.VoucherImage1} key={index.toString()}>
                    <Image

                      source={{
                        uri: voucherApi.imageurl,
                      }}
                      style={style.ImageVoucher}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          </View> */}



        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const style = StyleSheet.create({
  backGround: {
    backgroundColor: '#e3eeee',

  },

  LogoName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Style textHi
  textHi: {
    margin: 20,
  },
  textHello: {
    fontSize: 14,

    color: '#53707e',
  },
  textName: {
    fontSize: 20,

    color: '#53707e',
  },

  // Style textAva
  textAvatar: {
    margin: 20,
    width: 90,
    height: 50,
    marginRight: -15,
  },
  textImgAva: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  // Style textInput
  ReSreach: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 17,
    padding: 10,
  },

  // Button , Touc
  Story: {
    marginTop: 15,
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#5EDFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
  },

  // Experience 
  Experience: {
    marginTop: 15,
    marginLeft: 20,
  },
  textExperience: {
    color: '#115d6d',
    fontSize: 20,
  },

  Touch: {
    width: 120,
    height: 150,
    marginTop: 5,
    marginLeft: 20,
  },
  TouchImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  // Voucher
  Voucher: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  VoucherImage: {
    marginLeft: 10,
  },
  VoucherImage1: {
    marginLeft: 20,
  },
  ImageVoucher: {
    width: 350,
    height: 120,
    borderRadius: 10,
  },
  // Hotel Touch
  HotelTouch: {
    width: 350,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: "row",
  },
  HotelTouch1: {
    width: 120,
    marginTop: 5,
    marginLeft: 20,
  },
  HotelTouchImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
  },
  HotelText: {
    flexDirection: "column",
    width: 230,
  },
  HotelName: {
    color: '#453F3F',
    marginTop: 15,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '700',

  },

  HotelStar: {
    color: '#f2f63c',
    margin: 10,
  },
  HotelPrice: {

    margin: 10,
    fontSize: 13,
    color: '#5c7dff',
  },

  iconSreach: {
    position: 'absolute',
    right: 40,
  },
  recommed_hotel: {
    backgroundColor: "#FFFFFF",
    height: 210,
    width: 300,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 17,
  },
  Hotel_start_reviews: {
    fontSize: 13,
    color: '#5c7dff'
  },
  recommed_hotel_image: {
    width: '93%',
    height: 80,
    borderRadius: 10,
    margin: 10,
  },
  recommed_hotel_text: {
    color: '#303030',
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
  }
});
