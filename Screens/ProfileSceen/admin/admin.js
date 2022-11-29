import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import { SafeAreaView } from 'react-native-safe-area-context';

function admin({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>

                <View>
                    <View style={style.iconBack}>
                        <TouchableOpacity style={style.iconBack}
                            onPress={() => {
                                navigation.navigate('Profile')
                            }}
                        >
                            <Ionicons name="chevron-back" size={20} />
                            <Text> Back </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate('createAccout')
                        }}
                        >
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
                            }}>
                                <View>
                                    <Ionicons name="pricetag-outline" size={25} />
                                </View>

                                <View style={{ marginLeft: -100, }}>
                                    <Text style={{ fontSize: 15, fontWeight: '500' }}> Tạo tài khoản mới </Text>
                                </View>

                                <View>
                                    <MaterialIcons name="navigate-next" size={25} />
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('createHotel')
                            }}
                        >
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
                            }}>
                                <View>
                                    <Ionicons name="pricetag-outline" size={25} />
                                </View>

                                <View style={{ marginLeft: -100, }}>
                                    <Text style={{ fontSize: 15, fontWeight: '500' }}> Thêm khách sạn </Text>
                                </View>

                                <View>
                                    <MaterialIcons name="navigate-next" size={25} />
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('createAddress')
                            }}
                        >
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
                            }}>
                                <View>
                                    <Ionicons name="pricetag-outline" size={25} />
                                </View>

                                <View style={{ marginLeft: -100, }}>
                                    <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 30, }}> Thêm address, tin tức </Text>
                                </View>

                                <View>
                                    <MaterialIcons name="navigate-next" size={25} />
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Profile')
                            }}
                        >
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 20, marginRight: 20,
                                backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20,
                            }}>
                                <View>
                                    <Ionicons name="pricetag-outline" size={25} />
                                </View>

                                <View style={{ marginLeft: -100, }}>
                                    <Text style={{ fontSize: 15, fontWeight: '500' }}> Quản lý đơn hàng </Text>
                                </View>

                                <View>
                                    <MaterialIcons name="navigate-next" size={25} />
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default admin;

const style = StyleSheet.create({
    iconBack: {
        flexDirection: "row",
        marginTop: 10,
    },
})