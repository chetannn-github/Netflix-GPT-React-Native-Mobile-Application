
import React from 'react'
import {  Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRated from '../../hooks/useTopRatedMovies';


const _layout = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  return (
    
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#e50914' ,
      tabBarStyle:{
        position:"absolute",
        backgroundColor:"black",
        borderTopWidth: 1,
        borderTopColor: "#ff8c00",
        height: 50,
        borderRadius:1,
        alignContent:'center',
        justifyContent:'center'
      }}}
    >
    <Tabs.Screen
      name="home"
      options={{
        title:"Home",
        headerShown:false,
        tabBarIcon: ({ color, focused }) => <Ionicons size={26} name={focused? "home" : "home-outline"} color={color} />,
      }}
    />
    <Tabs.Screen
      name="gptSearch"
      options={{
        headerShown:false,
        title:"GPT Search",
        tabBarIcon: ({ color ,focused }) =>  <Ionicons size={26} name={focused? "search" : "search-outline"} color={color} />,
      }}
    />
  
    
    </Tabs>
  )
}

export default _layout