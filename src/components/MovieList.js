import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title, movies}) => {
    // console.log(movies)

    if(movies === null) {
        return
    }
  return (
    <div className='px-6  text-white '>
    <h1 className='font-bold text-xl  py-4'>{title}</h1>
    <div className='flex overflow-x-auto scroll-smooth webkit'>
     <div className='flex gap-4 mt-3'>
    {movies?.map(movie => 
        
        <MovieCards key={movie.id} movieId={movie.id} posterPath = {movie.poster_path} />

    )}
    </div>
   </div>
    </div>
  )
}

export default MovieList