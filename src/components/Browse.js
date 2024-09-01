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
      <div >
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
    </div>
  )
}

export default Browse