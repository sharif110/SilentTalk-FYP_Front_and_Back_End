import { View, Text , StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Menu() {
  return (
    <View>
          <Text style={style.btnText}>Menu</Text>
    </View>
  )
}

const style = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',

    },
})