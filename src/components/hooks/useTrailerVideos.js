import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/contant-url";
import { addTrailerVideo } from "../../utils/movieSLice";

const useTrailerVideos = (movieId) => {
   
    
  const dispatch = useDispatch();

  //perform Memoization
  const trialerVideo = useSelector(store => store.movies.trialerVideo);
  //fetch trailer video
  
  const getMovieVideo = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
    const data = await response.json();
    // console.log(data);
  
    const filterData = data.results.filter( video => video.type === "Trailer");
    const trailer = filterData.length  ? filterData[0] : data.results[0];
    // console.log(trailer);
  
    dispatch(addTrailerVideo(trailer));
  
  };
  
  
  useEffect(() => {
   !trialerVideo && getMovieVideo();
  },[]);
  
  
};
 export default useTrailerVideos;