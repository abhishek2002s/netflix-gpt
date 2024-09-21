import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

{/*
 Movielist - popular
  movieCards init
 Movielist of Nowplaying
 Movielist - Trending
 Movielist - Horror
  */
}

const SecondaryContainer = () => {
const movies = useSelector(store => store.movies)

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
    <div className='md:-mt-16 lg:-mt-72  mt-34 relative z-20'>
      <MovieList  title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
    </div>
      <MovieList  title = {"Trending"} movies = {movies.trendingMovies} />
      <MovieList  title = {"Popular"} movies = {movies. popularMovies}/>
      <MovieList  title = {"Upcoming Movies"} movies = {movies.upComingMovies}/>
      <MovieList  title = {"Horror Movies"} movies = {movies.horrorMovies}/>
      <MovieList  title = {"Romance Movies"} movies = {movies.romanceMovies}/>
      <MovieList  title = {"Fantasy Movies"} movies = {movies.fantasyMovies}/>
      <MovieList  title = {"War Movies"} movies = {movies.warMovies}/>
    </div>
    )
  )
}

export default SecondaryContainer;