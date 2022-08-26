import React, {useState} from 'react';
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


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NameLocals = ['Nha Trang', 'HCM', 'Đà Lạt', 'Đà Nẵng'];

const Home = ({navigation}) => {
  const [NameLocalType, setNameLocalType] = useState('Nha Trang');

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
                <Text style={style.textName}> An Sơn</Text>
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
              placeholder="Tìm kiếm khách sạn"
            />
          </View>

          {/* Story */}
          <View style={style.Story}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {NameLocals.map(NameLocal => (
                <TouchableOpacity
                  key={NameLocal}
                  style={{
                    width: 120,
                    height: 40,
                    backgroundColor:
                      NameLocal === NameLocalType ? '#5EDFFF' : '#FFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginLeft: 20,
                  }}
                  onPress={() => {
                    setNameLocalType(NameLocal);
                  }}>
                  <Text>{NameLocal}</Text>
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
             
                {NameLocalType == 'Nha Trang' ? <Switch /> : null}
                {NameLocalType == 'HCM' ? <Switch1 /> : null}
                {NameLocalType == 'Đà Lạt' ? <Switch2 /> : null}
                {NameLocalType == 'Đà Nẵng' ? <Switch3 /> : null}

                <View>
                  
                </View>
                  
            </View>
          </View>

          {/* Voucher */}

          <View>
            <View style={style.Experience}>
              <Text style={style.textExperience}> Voucher </Text>
            </View>

            <View style={style.Voucher}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={style.VoucherImage1}>
                  <Image
                    source={{
                      uri: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503029217-1c30a1f33dc20593a6f2b2fd2ea7eb4b.jpeg?tr=q-75 ',
                    }}
                    style={style.ImageVoucher}
                  />
                </View>

                <View style={style.VoucherImage}>
                  <Image
                    source={{
                      uri: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/05/10/1652165154789-a2f1dcf402cfd405cdde3e88c53ced37.png?tr=q-75 ',
                    }}
                    style={style.ImageVoucher}  
                  />
                </View>

                <View style={style.VoucherImage}>
                  <Image
                    source={{
                      uri: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/01/07/1641539003712-a5e2ba3c333312b3d28ddd354c980ae1.jpeg?tr=q-75 ',
                    }}
                    style={style.ImageVoucher}
                  />
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Hotel */}
          <View
            style={{
              height: 450,
            }}>
            <View style={style.Experience}>
              <Text style={style.textExperience}> Hotel </Text>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={style.HotelTouch}
                  onPress={() => {
                    navigation.navigate('Hotel');
                  }}>
                  <Image
                    source={{
                      uri: 'https://cdn1.nhatrangtoday.vn/images/photos/khach-san-melissa-nha-trang-sanh-1.jpg',
                    }}
                    style={style.HotelTouchImage}
                  />
                  <View style={style.HotelText}>
                    <Text style={style.HotelName}>
                      Khách Sạn Melisa Nha Trang
                    </Text>
                    <Text style={style.HotelStar}>
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                    </Text>
                    <Text style={style.HotelPrice}>5.300.300</Text>
                    <Text style={style.HotelPriceNew}>3.300.300</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.HotelTouch}>
                  <Image
                    source={{
                      uri: 'https://files.giaoducthoidai.vn/Uploaded/haihn/2019-12-24/a0-tr12-CZEB.jpg',
                    }}
                    style={style.HotelTouchImage}
                  />
                  <View style={style.HotelText}>
                    <Text style={style.HotelName}>
                      Mường Thanh Luxury Hotel
                    </Text>
                    <Text style={style.HotelStar}>
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                    </Text>
                    <Text style={style.HotelPrice}>2.300.300</Text>
                    <Text style={style.HotelPriceNew}>1.750.300</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.HotelTouch}>
                  <Image
                    source={{
                      uri: 'https://khachsandanang.info/wp-content/uploads/2017/02/tong-quan-20.jpg',
                    }}
                    style={style.HotelTouchImage}
                  />
                  <View style={style.HotelText}>
                    <Text style={style.HotelName}>
                      Khách Sạn Đà Nẵng Bay Hotel
                    </Text>
                    <Text style={style.HotelStar}>
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                    </Text>
                    <Text style={style.HotelPrice}>2.300.300</Text>
                    <Text style={style.HotelPriceNew}>1.000.300</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.HotelTouch}>
                  <Image
                    source={{
                      uri: 'https://cdn1.nhatrangtoday.vn/images/photos/khach-san-melissa-nha-trang-sanh-1.jpg',
                    }}
                    style={style.HotelTouchImage}
                  />
                  <View style={style.HotelText}>
                    <Text style={style.HotelName}>
                      Khách Sạn Melisa Nha Trang
                    </Text>
                    <Text style={style.HotelStar}>
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                      <AntDesign name="star" size={16} />
                    </Text>
                    <Text style={style.HotelPrice}>4.300.300</Text>
                    <Text style={style.HotelPriceNew}>3.800.000</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // </ImageBackground>
  );
};
export default Home;

const style = StyleSheet.create({
  backGround: {
    backgroundColor: '#84c8eb',
    width: windowWidth,
    height: windowHeight,
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
  },
  textInput: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
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
    fontSize: 18,
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
    width: 120,
    marginTop: 5,
    marginLeft: 20,
  },
  HotelTouch1: {
    width: 120,
    marginTop: 5,
    marginLeft: 20,
  },
  HotelTouchImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  HotelText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  HotelName: {
    color: '#453F3F',
    width: 120,
    height: 40,
    marginLeft: 10,
  },
  HotelTextName: {
    fontSize: 13,
    padding: 3,
  },
  HotelStar: {
    color: '#ddfb5b',
    marginTop: 5,
  },
  HotelPrice: {
    color: '#576E74',
    textDecorationLine: 'line-through',
    fontSize: 13,
  },
  HotelPriceNew: {
    color: '#E01E1E',
    fontSize: 18,
  },
  
});
