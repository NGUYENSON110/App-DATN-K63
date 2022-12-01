import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";




const DetailsEx = ({ route, navigation }) => {

  const { item } = route.params
  // console.log("item", item.food[0])

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* Back */}

          <View style={style.iconBack}>
            <TouchableOpacity style={style.iconBack}
              onPress={() => {
                navigation.navigate('Home')
              }}
            >
              <Ionicons name="chevron-back" size={20} />
              <Text> Back </Text>
            </TouchableOpacity>
          </View>

          {/*  Image */}
          <View style={{ marginLeft: 15, marginTop: 10 }}>
            <Image source={{ uri: item.imageurl }} style={style.Image} />
          </View>

          {/*  Text Review*/}

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 350,
              height: 80,

              marginLeft: 15,
            }}
          >
            <Text style={{
              fontSize: 15,
            }}>
              {item.name}, còn gọi bằng tên cũ phổ biến là Sài Gòn, là
              thành phố lớn nhất ở Việt Nam về dân số và quy mô đô thị hóa .
            </Text>
          </View>

          {/* đồ ăn */}
          <View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 18 }}>Món Ăn Ngon </Text>
            </View>

            <ScrollView horizontal style={style.ListFood} showsHorizontalScrollIndicator={false}>
              {item.food.map((item, index) => (



                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  <Image source={{ uri: item.imageurl }} style={{ width: 120, height: 120, borderRadius: 20, marginLeft: 5 }} />
                  <Text style={{marginTop: 5, fontSize: 15,width: 100,}}>{item.name}</Text>
                </View>
              ))}


            </ScrollView>
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsEx;

const style = StyleSheet.create({
  // Back
  iconBack: {
    flexDirection: "row",
    marginTop: 10,
  },
  Image: {
    width: 350,
    height: 400,
    borderRadius: 10,
  },
  //   ListFood
  ListFood: {
    marginLeft: 15,
    marginTop: 10,
    height: 150,
  }
});
