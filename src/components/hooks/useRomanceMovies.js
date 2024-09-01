import { useEffect } from "react";
import { API_CODE, API_OPTIONS } from "../../utils/contant-url"
import { useDispatch } from "react-redux";
import { addHorrorMovies, addRomanceMovies } from "../../utils/movieSLice";

const useRomanceMovies = () => {
const dispatch = useDispatch();

    const romanceMoviesList = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_CODE}&with_genres=10749`,API_OPTIONS);
        const data  = await response.json();
        dispatch(addRomanceMovies(data.results));

    }

    useEffect(() => {
      romanceMoviesList();
    },[]);
};

export default useRomanceMovies;