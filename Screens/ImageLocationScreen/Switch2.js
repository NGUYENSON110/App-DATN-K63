import React, { Component } from 'react';
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

const Switch2 = ({ navigation }) =>{   
    return (
        <View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <TouchableOpacity
                  style={style.Touch}
                  onPress={() => {
                    navigation.navigate('DetailsEx');
                  }}>
                  <Image
                    source={require('../../Image/Hcm.jpg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={style.Touch}>
                  <Image
                    source={require('../../Image/nhatrang.jpg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={style.Touch}>
                  <Image
                    source={require('../../Image/phuquoc.jpg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={style.Touch}>
                  <Image
                    source={require('../../Image/phuquoc2.jpeg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>
                </ScrollView>
        </View>
    )

}
export default Switch2;

const style = StyleSheet.create({
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
})