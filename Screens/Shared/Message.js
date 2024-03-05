import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Message({who,message}) {
  return (
      <View style={{ ...style.message, marginLeft: who === 'me' ? 0 : 'auto', backgroundColor: who === 'me' ? '#ddd' : '#222' }}>
      <Text style={{...style.text , color: who === 'me' ? '#222': '#fff'}}>{message}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    
    message:{
        marginBottom:10,
        width:200,
        padding:10,
        backgroundColor:'#ddd',
        color:'#222',
        borderRadius:10,
        shadowColor:'green',
        shadowRadius:20,
    },
    text:{
        color: '#222',
        fontSize:16,
        fontWeight:'400'
    }

})