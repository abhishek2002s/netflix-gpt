import { useEffect } from "react";
import { API_CODE, API_OPTIONS } from "../../utils/contant-url"
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../../utils/movieSLice";

const useHorrorMovies = () => {
const dispatch = useDispatch();


const HorrorMovies = useSelector(store => store.movies. horrorMovies);

    const horrorMoviesList = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_CODE}&with_genres=27`,API_OPTIONS);
        const data  = await response.json();
        dispatch(addHorrorMovies(data.results));

    }

    useEffect(() => {
     !HorrorMovies && horrorMoviesList();
    },[]);
};

export default useHorrorMovies;