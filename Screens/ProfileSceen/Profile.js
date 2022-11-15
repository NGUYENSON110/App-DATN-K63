import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"


function Profile() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, }}>

            <View>
              <Text style={{ fontSize: 20, fontWeight: '700', padding: 10, }}>Profile</Text>
            </View>

            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 20 }}>
              <TouchableOpacity>
                <FontAwesome name="gear" size={22} style={{ padding: 10, }} />
              </TouchableOpacity>
            </View>

          </View>

          {/* Avatar */}

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            <View>
              <Image source={require('../../Image/hanoi.jpg')} style={{ width: 150, height: 150, borderRadius: 75, }} />
            </View>

            <View style={{ marginTop: 20, }}>
              <Text style={{ fontSize: 20, }}>Nguyễn An Sơn</Text>
            </View>

            <View style={{ marginTop: 10, }}>
              <Text style={{ fontSize: 14, }}>Nguyễn An Sơn</Text>
            </View>
          </View>

          {/* Review, Booking */}

          <View>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20, backgroundColor: '#FFFFFF', padding: 15,
              borderRadius: 20,
            }}>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: "#5c7dff" }}>26</Text>
                <Text>Transaction</Text>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: "#5c7dff" }}>12</Text>
                <Text>Review</Text>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: "#5c7dff" }}>4</Text>
                <Text>Booking</Text>
              </View>

            </View>

          </View>

          {/* Option */}

          <View>

            <TouchableOpacity>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
              }}>
                <View>
                  <AntDesign name="hearto" size={25} />
                </View>

                <View style={{ marginLeft: -100, }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}> My Favourite </Text>
                </View>

                <View>
                  <MaterialIcons name="navigate-next" size={25} />
                </View>

              </View>
            </TouchableOpacity>


            <View>
            <TouchableOpacity>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
              }}>
                <View>
                  <Ionicons name="time-outline" size={25} />
                </View>

                <View style={{ marginLeft: -100, }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}> Transaction </Text>
                </View>

                <View>
                  <MaterialIcons name="navigate-next" size={25} />
                </View>

              </View>
            </TouchableOpacity>
            </View>


            <View>
            <TouchableOpacity>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
              }}>
                <View>
                  <Ionicons name="pricetag-outline" size={25} />
                </View>

                <View style={{ marginLeft: -100, }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}> My Cupon </Text>
                </View>

                <View>
                  <MaterialIcons name="navigate-next" size={25} />
                </View>

              </View>
            </TouchableOpacity>
            </View>


            <View>
            <TouchableOpacity>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
              }}>
                <View>
                  <Entypo name="log-out" size={25} style={{color:'red'}}/>
                </View>

                <View style={{ marginLeft: -100, }}>
                  <Text style={{ fontSize: 15, fontWeight: '500', color:'#f5434d' }}> Log Out </Text>
                </View>

                <View>
                  <MaterialIcons name="navigate-next" size={25} />
                </View>

              </View>
            </TouchableOpacity>
            </View>


























          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

