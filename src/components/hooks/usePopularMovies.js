import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/contant-url"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../utils/movieSLice";




const usePopularMovies = () => {
    const dispatch = useDispatch();

    const POPULARMOVIES = useSelector(store => store.movies.PopularMovies);

const PopularMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovies(data.results))
};

useEffect(() => {
     !POPULARMOVIES && PopularMovies();
  },[])


};

export default usePopularMovies;