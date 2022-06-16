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
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ImgMT = {
  uri: "https://pix10.agoda.net/hotelImages/7243073/-1/2c23bff22987ee68884d4f4996df672a.png?ca=9&ce=1&s=1024x768",
};
const ImgMT2 = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMa7l1J6Oz6bm8_5JT32KtTIP2euhGaqN68mJnn_qZ9UiWk-qykxETemKSPNFTzPKwfw&usqp=CAU",
};
const ImgMT3 = {
  uri: "https://cdn.cnn.com/cnnnext/dam/assets/190215120715-pullman-danang-beach-resort-4088-14-full-169.jpg",
};
const ImgMT4 = {
  uri: "https://vietnaminsider.vn/wp-content/uploads/2021/06/my-khe-beach-da-nang.jpeg",
};

const Saved = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      marginTop: 20,
    }}>
      <ScrollView>
        <View>
          {/* Banner 1  */}
          <View style={style.banner}>
            <View style={style.bannerFormText}>
              <Text style={style.bannerText}>Saved Places</Text>
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
              placeholder="Tìm kiếm khách sạn"
            />
          </View>

          {/* Saved */}
          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Image
                source={ImgMT3}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
              />
              <View style={{ flexDirection: "row" }}>
              
                  <View>
                    <Text style={style.inboxNameHotel}>Nha Trang Beach</Text>
                    <View>
                      <Text style={style.inboxDetailHotel}>
                        1.500.000 - 2.300.000
                      </Text>
                    </View>
                  </View>
              

                <View style={{ marginTop: 10, marginLeft: -20 }}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                  <Text style={style.inboxNameTime}>
                      <FontAwesome name="bookmark" size={19}/>
                  </Text>
                </View>

              </View>
            </View>
          </View>

          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Image
                source={ImgMT2}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
              />
              <View style={{ flexDirection: "row" }}>
              
                  <View>
                    <Text style={style.inboxNameHotel}>Nha Trang Beach</Text>
                    <View>
                      <Text style={style.inboxDetailHotel}>
                        2.500.000 - 3.300.000
                      </Text>
                    </View>
                  </View>
              

                <View style={{ marginTop: 10, marginLeft: -20 }}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                  <Text style={style.inboxNameTime}>
                      <FontAwesome name="bookmark" size={19}/>
                  </Text>
                </View>

              </View>
            </View>
          </View>


          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Image
                source={ImgMT}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
              />
              <View style={{ flexDirection: "row" }}>
              
                  <View>
                    <Text style={style.inboxNameHotel}>Nha Trang Beach</Text>
                    <View>
                      <Text style={style.inboxDetailHotel}>
                        1.600.000 - 2.600.000
                      </Text>
                    </View>
                  </View>
              

                <View style={{ marginTop: 10, marginLeft: -20 }}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                  <Text style={style.inboxNameTime}>
                      <FontAwesome name="bookmark" size={19}/>
                  </Text>
                </View>

              </View>
            </View>
          </View>


          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Image
                source={ImgMT4}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
              />
              <View style={{ flexDirection: "row" }}>
              
                  <View>
                    <Text style={style.inboxNameHotel}>Nha Trang Beach</Text>
                    <View>
                      <Text style={style.inboxDetailHotel}>
                        3.500.000 - 4.300.000
                      </Text>
                    </View>
                  </View>
              

                <View style={{ marginTop: 10, marginLeft: -20 }}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                  <Text style={style.inboxNameTime}>
                      <FontAwesome name="bookmark" size={19}/>
                  </Text>
                </View>

              </View>
            </View>
          </View>

            
          <View style={style.inBoxx}>
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Image
                source={require("../../Image/nhatrang.jpg")}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
              />
              <View style={{ flexDirection: "row" }}>
              
                  <View>
                    <Text style={style.inboxNameHotel}>Nha Trang Beach</Text>
                    <View>
                      <Text style={style.inboxDetailHotel}>
                        5.500.000 - 6.300.000
                      </Text>
                    </View>
                  </View>
              

                <View style={{ marginTop: 10, marginLeft: -20 }}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                  <Text style={style.inboxNameTime}>
                      <FontAwesome name="bookmark" size={19}/>
                  </Text>
                </View>

              </View>
            </View>
          </View>


          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Saved;

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
    borderRadius: 8,
    padding: 10,
  },
  // Inbox
  inBox: {
    width: 350,
    height: 250,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 7,
  },
  inBoxx: {
    width: 350,
    height: 130,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  inboxNameHotel: {
    fontSize: 15,
    marginLeft: 15,
    width: 200,
    height: 25,
  },
  inboxNameTime: {
    fontSize: 10,
    color: "#161618",
  },
  inboxDetailHotel: {
    fontSize: 12,
    color: "red",
    marginLeft: 15,
  },
  // Image
});
