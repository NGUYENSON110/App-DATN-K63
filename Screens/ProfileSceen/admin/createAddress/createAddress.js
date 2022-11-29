import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import { SafeAreaView } from 'react-native-safe-area-context';

function createAddress({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={style.iconBack}>
                        <TouchableOpacity style={style.iconBack}
                            
                        >
                            <Ionicons name="chevron-back" size={20} />
                            <Text> Back </Text>
                        </TouchableOpacity>
                    </View>
                <View>
                    <Text>asdas
                    </Text>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default createAddress;

const style = StyleSheet.create({
    iconBack: {
        flexDirection: "row",
        marginTop: 10,
    },
})