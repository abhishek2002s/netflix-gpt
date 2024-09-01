import React from 'react'
import { IMG_CDN } from '../utils/contant-url'

const MovieCards = ({posterPath}) => {
  return (
        <div className='w-44 h-fit'>
            <img alt='Now Playing Movies' src={IMG_CDN + posterPath}></img>
        </div>
  )
}

export default MovieCards