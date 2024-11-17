import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TMDB_API_OPTIONS } from '../../scripts/Constants';
import VideoBg from './VideoBg';
import "../Stylesheets/MovieInfo.css"
import "../Stylesheets/MainMovie.css"
import { View } from 'react-native';

const MovieInfo = () => {
    let [movieInfo ,setMovieInfo] = useState(null);
    let{ id }= useParams();
    useEffect(()=>{fetchMovieInfo(id),[]});

    let fetchMovieInfo = async (id) =>{
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        let data = await fetch(url, TMDB_API_OPTIONS);
        let movieInfo =await data.json();
        setMovieInfo(movieInfo);
       
}

    if (!movieInfo) return
    let {title,overview,}= movieInfo;

return ( <View id="movieinfo-container">
        <VideoBg movieId={id}/>
        <View id="movie-info">
            <View id="title">{title}</View>
            <View id= "overview">{overview}</View>
            <View id="buttons">
                <View id="play">▶   Play</View>
                <View id="more">More Info</View>
            </View>
        </View>
        </View>
  )
}

export default MovieInfo