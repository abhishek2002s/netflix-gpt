import React from 'react'

const VideoTitle = ({original_title, overview}) => {
  return (
    <div className='md:pt-44   lg:pt-44 pt-20 md:px-8 px-5 absolute w-full aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold   lg:w-5/12 md:w-5/12 md:text-5xl text-2xl lg:text-6xl'>{original_title}</h1>
        <p className='md:text-lg lg:text-lg text-[10px] md:w-6/12 lg:w-5/12 w-[230px]  md:mt-4 lg:mt-4 mt-1'>{overview}</p>
        <div className='flex mt-1 md:gap-3 lg:gap-5 gap-3 md:mt-3 lg:mt-3'>
        <button className='bg-white text-black px-5 md:px-8 lg:px-10  text-sm md:text-xl lg:text-xl border-none font-semibold rounded-md md:py-2 lg:py-2 py-[.5vw] hover:bg-opacity-90'> Play</button>
        <button className='bg-gray-600  text-white text-sm md:text-lg lg:text-lg md:px-3 px-3 lg:px-5 border-none rounded-md font-semibold md:py-2 lg:py-2 py-[.5vw]'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;