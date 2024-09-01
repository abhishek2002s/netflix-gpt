import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/contant-url"
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../../utils/movieSLice";

 

 const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const upComingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const data = await response.json();
           dispatch(addUpComingMovies(data.results));
    }

    useEffect(() => {
        upComingMovies();
    },[]);
 }

 export default useUpComingMovies;