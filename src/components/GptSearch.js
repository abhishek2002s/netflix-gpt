import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSugeestion from './GptMovieSugeestion'
import { BG_URL } from '../utils/contant-url'

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-20">
        <img className="object-cover  h-[100vh]  md:h-screen lg:h-full lg:w-screen" src={BG_URL} alt="bg-img"></img>
      </div>
    <div className=''>
        
      <GptSearchBar/>
      <GptMovieSugeestion/>
    </div>
    </>
  )
}

export default GptSearch