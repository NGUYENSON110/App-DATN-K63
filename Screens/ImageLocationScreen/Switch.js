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
  import DetailsEx from '../HomeScreen/DetailsEx';
  import { useNavigation } from '@react-navigation/native';

const Switch = ({ DetailsEx }) =>{  
    const navigation = useNavigation(); 
    return (
        <View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <TouchableOpacity
                  style={style.Touch}
                  onPress={() => {
                    navigation.navigate('DetailsEx');
                  }}>
                  <Image
                    source={require('../../Image/nhatrang.jpg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={style.Touch}>
                  <Image
                    source={require('../../Image/nhatrang1.jpg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={style.Touch}>
                  <Image
                    source={require('../../Image/nhatrang2.jpg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={style.Touch}>
                  <Image
                    source={require('../../Image/nhatrang4.jpg')}
                    style={style.TouchImage}
                  />
                </TouchableOpacity>
                </ScrollView>
        </View>
    )

}
export default Switch;

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