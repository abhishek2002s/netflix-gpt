import { useEffect } from "react";
import { API_CODE, API_OPTIONS } from "../../utils/contant-url"
import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../../utils/movieSLice";

const useHorrorMovies = () => {
const dispatch = useDispatch();

    const horrorMoviesList = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_CODE}&with_genres=27`,API_OPTIONS);
        const data  = await response.json();
        dispatch(addHorrorMovies(data.results));

    }

    useEffect(() => {
      horrorMoviesList();
    },[]);
};

export default useHorrorMovies;