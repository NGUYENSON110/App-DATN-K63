import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/conText";

const Favourite = ({ navigation }) => {
  const { cartItem, removeItem } = useContext(AuthContext);
  console.log("aaaa", cartItem)
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View>

          <View >
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, marginLeft: 5 }}
              onPress={() => {
                navigation.navigate('Profile')
              }}
            >
              <AntDesign name="left" size={17} />
              <Text style={{ marginLeft: 7, }}>Back</Text>
            </TouchableOpacity>
          </View>


          <View style={{ marginTop: 20, marginLeft: 10, }}>
            <Text style={{ fontSize: 17, fontWeight: '500', }}>Favourite Items</Text>
          </View>

            {
              cartItem.map((item,index)=>(
                console.log("itemid", item._id),
                <View style={style.recommed_hotel} key={index}>

                <View>
                  <Image style={style.recommed_hotel_image}
                    source={{uri: item.imageurl}}
                  />
                </View>
    
                <View>
                  <Text style={style.recommed_hotel_text}>{item.name}</Text>
                </View>
    
                {/* <View>
                  <Text>adsdd</Text>
                </View>
     */}
                <View style={style.recommed_hotel_border}></View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
    
                  <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10, }}>
                    <Icon name="bed" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                    <Text>2 Beds</Text>
                  </View>
    
                  <View style={{ flexDirection: 'row', marginTop: 10, }}>
                    <Icon name="wifi" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                    <Text>2 Beds</Text>
                  </View>
    
                  <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 20 }}>
                    <Icon name="child" size={21} style={{ marginRight: 5, color: '#4e93ff' }} />
                    <Text>Free</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop: 5,}}
                    onPress={()=>removeItem(item._id)}
                  >
                    <Text style={{fontSize: 15, color:'red'}}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
              ))
            }

         

          

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Favourite;

const style = StyleSheet.create({
  recommed_hotel: {
    backgroundColor: "#FFFFFF",
    height: 210,
    width: 360,
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
  }
})