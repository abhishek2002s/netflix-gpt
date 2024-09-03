import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSugeestion = () => {

  const {gptName, moiveResult} = useSelector((store) => store.gpt);
 
  if(gptName === null) 
  {
    return;
  }
  // console.log(gptMovies);

  return (
    <div className='p-2  m-4 h-fit  bg-black bg-opacity-80'>
       <div>
       <MovieList  title = {gptName} movies = {moiveResult}/>
       </div>
    </div>
  )
}


/* //when we have gpt api then i will intergate it

    <div>
    <div>
    {gptName.map((movieName, index) => (
      <MovieList
      key={gptName}
      title={gptName}
      movies={movieResult[index]}
      />
    ))}

    </div>
    </div>
 
*/
export default GptMovieSugeestion;