import { useEffect } from "react";
import { API_CODE, API_OPTIONS } from "../../utils/contant-url"
import { useDispatch, useSelector } from "react-redux";
import { addFantasyMovies } from "../../utils/movieSLice";

const useFantasyMovies = () => {
    const dispatch = useDispatch();

    const FantasyMovie = useSelector(store => store.movies.FantasyMovie);

    const fantasyMoviesList = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_CODE}&with_genres=14`,API_OPTIONS);
        const data  = await response.json();
        dispatch(addFantasyMovies(data.results));

    }

    useEffect(() => {
     !FantasyMovie && fantasyMoviesList();
    },[]);
};

export default useFantasyMovies;