import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
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