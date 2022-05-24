import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/resturantDetails/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/resturantDetails/MenuItems'

export default function ResturantDetail() {
  return (
    <View>
        <About />
        <Divider width={1.8} style={{marginVertical:20}} />
        <MenuItems />
    </View>
  )
}