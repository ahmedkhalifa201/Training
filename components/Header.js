import React from 'react'


import { Text, View, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, SIZES } from '../constants';



const Header = (props) => {

    return (
        <>
            <StatusBar backgroundColor={COLORS.Purple} />
            <View style={styles.Header_View}>

                <TouchableOpacity
                    style={styles.Button_style}>
                    <AntDesign name={props.Icon_name} size={RFPercentage(5)} />

                </TouchableOpacity>

                <View >
                    <Text style={styles.HeaderText_style}>{props.Header_name}</Text>
                </View>

                <TouchableOpacity style={styles.FakeButton_style}></TouchableOpacity>
            </View>
            <View style={styles.FakeView_style}></View>

        </>
    )
}
const styles = StyleSheet.create({


    Header_View:
    {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: RFPercentage(25),
        width: SIZES.width,
        backgroundColor: COLORS.Purple,
        padding: RFPercentage(3),
        borderBottomEndRadius: RFPercentage(8),
        borderBottomStartRadius: RFPercentage(8)
    },

    Button_style:
    {
        width: RFPercentage(5),
        height: RFPercentage(5),
        backgroundColor: COLORS.LightPurple,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    FakeButton_style:
    {
        width: RFPercentage(5),
    },

    FakeView_style:
    {
        height: 0,
        marginTop: RFPercentage(-9.7)
    },

    HeaderText_style:
    {
        fontSize: RFPercentage(3.5),
        fontFamily: 'Changa-Medium'
    },


})

export default Header