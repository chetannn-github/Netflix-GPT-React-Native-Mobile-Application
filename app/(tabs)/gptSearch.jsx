import { Button, Image, ImageBackground, Pressable, RefreshControl, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import React, { useRef, useState } from "react"
import bgImage from"../../assets/photos/bg.jpg"
import logo from "../../assets/photos/logo.png"
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import ExploreMovies from "../../components/HomeSceeen/ExploreMovies"


const gptSearch = () => {
    const [isFocused, setIsFocused] = useState(false);
    let searchInput = useRef("");
    let searchMovieList= useSelector((store)=>(store.movies.searchResult));
   

    return (
        <ScrollView 
            className="relative flex flex-col   bg-black " 
            keyboardShouldPersistTaps= "never"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <ImageBackground 
                resizeMode="cover"
                className="h-[100vh] w-full absolute opacity-50"
                source={bgImage}>
            </ImageBackground> 
            <View id="header" className="h-[12vh] w-full  relative bg-opacity-5">
                <Image source={logo} className="relative h-full w-1/2"></Image>
            </View>
            
            <ScrollView  keyboardShouldPersistTaps="never"
                className="  relative  flex flex-col"
                style={{flex:1}}
            >
                <View className={`flex h-[8vh] flex-row w-full py-1  bg-black ${isFocused? "border-primary  border-2" : ""}`}>
                    <TextInput 
                    onChangeText={(text) => searchInput.current = text}
                    placeholder="🎬 What's Your Movie Pick Today ?🍿"
                    placeholderTextColor="#888" 
                    onFocus={()=>{setIsFocused(true)}}
                    onBlur={() => setIsFocused(false)}
                    className="h-[7vh] w-[85vw] bg-black px-2 text-white mb-4">
                    </TextInput>
                   <Pressable className="relative min-h-[7vh] w-[12vw]  overflow-hidden">
                    <View className="h-[7vh] bg-black flex items-center justify-center ">
                        <Ionicons name="search" color={"#e50914"} size={25}> </Ionicons>
                    </View>
                    
                    </Pressable>
                </View>


                

                
            </ScrollView>

            <ScrollView 
                className="relative  flex flex-col pb-[80px] pt-5"
                style={{flex:1}}
            >
                
                <ExploreMovies/>
                
            </ScrollView>
        
    
        </ScrollView>
    
        
        
        
       

    );
}


export default gptSearch;