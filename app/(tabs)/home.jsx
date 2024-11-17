import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import bgImage from"../../assets/photos/bg.jpg"
import { Image } from 'react-native'
import logo from "../../assets/photos/logo.png"
import ExploreMovies from '../../components/HomeSceeen/ExploreMovies'
import MainMovie from '../../components/HomeSceeen/MainMovie'



const home = () => {
  return (
    <ScrollView
            className="relative flex flex-col  bg-black " 
            keyboardShouldPersistTaps= "never"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            {/* <ImageBackground 
                resizeMode="cover"
                className="h-[100vh] w-full absolute opacity-50"
                source={bgImage}>
            </ImageBackground>  */}
            <View id="header" className="h-[12vh] w-full  relative bg-opacity-5">
                <Image source={logo} className="relative h-full w-1/2"></Image>
            </View>
            
            <MainMovie/>
            <ScrollView 
                className="relative  flex flex-col pb-[100px]"
                style={{flex:1}}
            >
                
                <ExploreMovies/>
                
            </ScrollView>
        
    
    </ScrollView>
  )
}

export default home