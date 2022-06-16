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




const DetailsEx = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* Back */}

          <View style={style.iconBack}>
            <TouchableOpacity style={style.iconBack}
               onPress ={() =>{
                navigation.navigate('Home')
              }}
            >
              <Ionicons name="chevron-back" size={20} />
              <Text> Back </Text>
            </TouchableOpacity>
          </View>

          {/*  Image */}
          <View style={{ marginLeft: 15, marginTop: 10 }}>
            <Image source={require("../../Image/Hcm.jpg")} style={style.Image} />
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
                fontSize : 15,
            }}>
              Thành phố Hồ Chí Minh, còn gọi bằng tên cũ phổ biến là Sài Gòn, là
              thành phố lớn nhất ở Việt Nam về dân số và quy mô đô thị hóa .
            </Text>
          </View>

          {/* đồ ăn */}
          <View>
              <View style={{ marginLeft: 15}}>
                  <Text style={{ fontSize: 18}}>Món Ăn Ngon </Text>
              </View>
              <ScrollView horizontal style={style.ListFood} showsHorizontalScrollIndicator={false}>
               
                    <Image source={require('../../Image/vitquaydanang.png')} style={{ width: 120, height: 120, borderRadius: 20, marginLeft: 5}}/>

                    <Image source={require('../../Image/monanhcm.png')} style={{ width: 120, height: 120, borderRadius: 20, marginLeft: 10,}}/>

                    <Image source={require('../../Image/monanhcm1.png')} style={{ width: 120, height: 120, borderRadius: 20, marginLeft: 10,}}/>

                    <Image source={require('../../Image/monanhcm2.png')} style={{ width: 120, height: 120, borderRadius: 20, marginLeft: 10,}}/>


             
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
ListFood:{
    marginLeft: 15,
    marginTop: 5,
}
});
