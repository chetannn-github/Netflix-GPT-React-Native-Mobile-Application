import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const index = () => {
  
  return (
      <View>
        <Link href={"/(auth)"} ><Text>Go to auth</Text></Link>
        <Link href={"/(tabs)/home"} ><Text>Go tab </Text></Link>
      </View>
 
  )
}

export default index