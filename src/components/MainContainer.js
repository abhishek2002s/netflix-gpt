import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    //Early Return (Most imp checking Condition)
    if(movies === null) return;

    const TrailerMovies = movies[0];
    // console.log(TrailerMovies);


    const  {original_title, overview, id} =  TrailerMovies;

  return (
    <div>
     <VideoTitle  original_title = {original_title} overview = {overview} />
     <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer;