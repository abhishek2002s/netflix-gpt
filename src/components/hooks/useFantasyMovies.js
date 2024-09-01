import { useEffect } from "react";
import { API_CODE, API_OPTIONS } from "../../utils/contant-url"
import { useDispatch } from "react-redux";
import { addFantasyMovies } from "../../utils/movieSLice";

const useFantasyMovies = () => {
    const dispatch = useDispatch();

    const fantasyMoviesList = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_CODE}&with_genres=14`,API_OPTIONS);
        const data  = await response.json();
        dispatch(addFantasyMovies(data.results));

    }

    useEffect(() => {
      fantasyMoviesList();
    },[]);
};

export default useFantasyMovies;