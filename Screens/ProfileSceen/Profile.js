import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialIcons";
import Iconss from "react-native-vector-icons/MaterialCommunityIcons";
import Iconsss from "react-native-vector-icons/Entypo";
import Iconssss from "react-native-vector-icons/FontAwesome5";
import Iconsssss from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";


const Profile = ( {navigation}) => {
  return (
    <SafeAreaView
      style={{
        
        backgroundColor:'#F2F2F2',
        height: 800,
      
      }}
    >
      <ScrollView>
        {/* Back */}

        <View style={style.iconBack}>
          <TouchableOpacity style={style.iconBack}>
            <Ionicons name="chevron-back" size={20} />
            <Text> Back </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <View style={style.container}>
            {/* Avatar */}
            <View>
              <Image
                style={style.avatar}
                source={require("../../Image/avaicon3d.png")}
              />
            </View>

            {/* Profile */}
            <View style={style.Profile}>
              <Text style={style.Profile_text1}>NGUYEN AN SON</Text>
              <Text style={style.Profile_text2}>@sonannguyen</Text>
            </View>
          </View>
        </View>

        {/* Banner My Profile*/}
        <View>
          <View style={style.BannerMyProfile}>
              <View>
                  <Image source={require("../../Image/iconvi.jpg")} style={style.IconVi}/>
                  <Text style={style.IconviText}> Voucher</Text>
              </View>

              <View>
                  <Image source={require("../../Image/icontichdiem.jpg")} style={style.Icontichdiem}/>
                  <Text style={style.IcontichdiemText}> Tích Điểm</Text>
              </View>

              <View>
                  <Image source={require("../../Image/iconvoucher.jpg")} style={style.IconVoucher}/>
                  <Text style={style.IconVoucherText}> Voucher</Text>
              </View>
          </View>
        </View>

        {/* Save  */}
        <View style={style.Save}>
              <Text style={style.SaveText}>Saved</Text>
          </View>
        
          <View style={style.Save}>
              <Text style={style.SaveText}>My Ratings</Text>
          </View>

          <View style={style.Save}>
              <Text style={style.SaveText}>Customer Sevice</Text>
          </View>



      </ScrollView>
    </SafeAreaView>
  );
}
export default Profile ;

const style = StyleSheet.create({
  // Back
  iconBack: {
    flexDirection: "row",
    marginTop: 10,
  },

  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 150,
    width: 350,
    borderRadius: 15,
  },
  //   avatar
  avatar: {
    width: 130,
    height: 130,
    marginTop: 10,
    borderRadius: 50,
    marginLeft: 20,
  },
  //   Profile
  Profile: {
    marginTop: 30,
    marginLeft: 20,
  },

  Profile_text1: {
    color: "black",
    fontSize: 20,
  },

  Profile_text2: {
    color: "#777777",
    marginTop: 10,
  },
  // BannerMyProfile
  BannerMyProfile:{
    flexDirection: "row",
    backgroundColor: "white",
    height: 100,
    width: 350,
    borderRadius: 15,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    justifyContent:'space-between',


  },
  IconVi:{
    width: 45,
    height: 45,
    marginLeft: 40,
  },
  Icontichdiem:{
    width: 45,
    height: 45,
  },
  IconVoucher:{
    width: 45,
    height: 45,
    marginRight: 40,
  },
  IconviText:{
    marginLeft: 35,
  },
  IcontichdiemText:{
    marginLeft: -10,
  },
  IconVoucherText:{
    marginLeft: -7,
  },
  // Save
  Save:{
    flexDirection: "row",
    backgroundColor: "white",
    height: 60,
    width: 350,
    borderRadius: 15,
    marginTop: 25,
    marginLeft: 20,
   
  },
  SaveText:{
    padding: 10,
    fontSize: 15,
  }
});
