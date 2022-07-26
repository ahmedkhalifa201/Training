import React from 'react'


import {Text, View, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import {  Header } from './components';
import { FONTS, SIZES } from './constants';




const App = () => {

  return (
    <>
      <View style={styles.main_View}>

        <Header
          Header_name='الصفحه الرئيسيه'
          Icon_name='back'
        />

        <View style={{height:50,width:50,borderWidth:1,borderRadius:RFPercentage(2)}}></View>
        {/* 

           code Here.........................................

        */}

      </View>
    </>
  )
}

const styles = StyleSheet.create({

  main_View: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

})

export default App