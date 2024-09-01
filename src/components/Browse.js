import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Header from './Header'
import useBollywoodMovies from './hooks/useBollywoodMovies';
import useFantasyMovies from './hooks/useFantasyMovies';
import useHorrorMovies from './hooks/useHorrorMovies';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import usePopularMovies from './hooks/usePopularMovies';
import useRomanceMovies from './hooks/useRomanceMovies';
import useTrendingMovies from './hooks/useTrendingMovies';
import useUpComingMovies from './hooks/useUpComingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

//strucutre of the container :
{
  /* 
  
  MainConatiner
    - VideoBackground
    - VideoTitle
  SecondaryConatiner
    - MovieList *n
    - cards * n
  */
}

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

useNowPlayingMovies();
usePopularMovies();
useTrendingMovies();
useUpComingMovies();
useHorrorMovies();
useRomanceMovies();
useFantasyMovies();
useBollywoodMovies();

  return (
    <div>
      <Header/>
      {
        
        showGptSearch ? (<GptSearch/>) : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )  
      }
      </div>
  )
}

export default Browse