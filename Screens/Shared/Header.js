import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header({title , titleBold}) {
  return (
    <View style={style.header}>
      <Text style={style.title}>{title}</Text>
          <Text style={style.subtitle}>{titleBold}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    header: {
        marginBottom:20,
    },
    title: {
        color: '#222',
        fontSize: 30,
        fontWeight: '400',
    },
    subtitle: {
        color: '#222',
        fontSize: 30,
        textDecorationLine:'underline',
        fontWeight: '600',
    }
})


