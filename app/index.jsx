import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

import { TouchableOpacity } from 'react-native';

const index = () => {
  
  return (
  
    <View className=" flex-1 bg-primary items-center gap-5 pt-[55px] ">
      <Image resizeMode="contain" className="w-1/2 h-10" source={Logo}></Image>
      <Image resizeMode="contain" className="w-[100%] h-[260px]" source={Cards}></Image>
    
      <Text className="text-3xl text-white  text-center  font-pbold">
            Discover Endless{"\n"}
            Possibilities with{" "}
            <Text className="text-secondary">Aora</Text>
      </Text>
      <Text className="text-[#CDCDE0] w-[80%] text-center">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora. </Text>
    
    
      <TouchableOpacity onPress={handlePress} className=" py-2 px-20 flex items-center justify-center text-center rounded-sm text-[#161622] bg-secondary ">
        <Text className= "font-semibold text-2x">Continue with Email</Text>
      </TouchableOpacity>
    

    <Link href={'/(tabs)/'}> <Text className="text-white">Go to tabs (temporary)</Text></Link>
</View>
  )
}

export default index