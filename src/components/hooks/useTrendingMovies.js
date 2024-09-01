import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/contant-url"
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../../utils/movieSLice";


const useTrendingMovies = () => {
  const dispatch = useDispatch();

    const trendingMovies = async () => {
        const response = await fetch( 'https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addTrendingMovies(data.results));

    };

    useEffect(() => {
          trendingMovies();
    },[]);


}

export default useTrendingMovies;