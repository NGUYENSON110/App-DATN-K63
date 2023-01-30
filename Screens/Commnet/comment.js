import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet,TouchableOpacity} from 'react-native'

const comment = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>

                    <View style={style.iconBack}>
                        <TouchableOpacity style={style.iconBack}
                            onPress={() => {
                                navigation.navigate('RecommendHotel')
                            }}
                        >
                            <Ionicons name="chevron-back" size={20} />
                            <Text> Back </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text>asdsad</Text>
                    </View>


                </View>
            </ScrollView>


        </SafeAreaView>
    )
}


export default comment;

const style = StyleSheet.create({
    // Back
    iconBack: {
        flexDirection: "row",
        marginTop: 10,
    },
})
