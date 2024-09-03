import { useEffect } from "react";
import { API_CODE, API_OPTIONS } from "../../utils/contant-url"
import { useDispatch, useSelector } from "react-redux";
import { addBollywoodMovies, addWarMovies } from "../../utils/movieSLice";

const useBollywoodMovies = () => {
    const dispatch = useDispatch();

    const BollywoodMovies = useSelector(store => store.movies. warMovies);

    const warMoviesList = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_CODE}&with_genres=10752`,API_OPTIONS);
        const data  = await response.json();
        dispatch(addWarMovies(data.results));

    }

    useEffect(() => {
     !BollywoodMovies &&  warMoviesList();
    },[]);
}

export default useBollywoodMovies;