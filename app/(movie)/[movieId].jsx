import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import { useLocalSearchParams } from 'expo-router';

const movie = () => {
  const {movieId } = useLocalSearchParams();
  return (
    <SafeAreaView  className=" w-[100vw] bg-black">
       
            <MovieInfo  movieId={movieId}/>
      
      
    </SafeAreaView>
  )
}

export default movie