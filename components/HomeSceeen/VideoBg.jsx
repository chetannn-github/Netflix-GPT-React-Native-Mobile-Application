import React from 'react'
import useTrailerVideo from '../../hooks/useTrailerVideo';
import { View } from 'react-native';
import WebView from 'react-native-webview';

const VideoBg = ({movieId}) => {
    const ytId = useTrailerVideo(movieId);
    if (!(ytId)) {return}
    console.log(ytId);
    let URL= `https://www.youtube.com/embed/${ytId}?si=Vr6smvqxcFIAGMU7&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=${ytId}&controls=0&showinfo=0&rel=0`;
  return (
    <View id="bgvideo" className="h-[70vh] flex justify-center   -z-10 absolute bg-blue-600 w-[100vw] overflow-hidden">
        <WebView 
        source={{ uri: URL }}
        className="-z-10 "
      /> 
        
    </View>
  )
}

export default VideoBg