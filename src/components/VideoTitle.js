import React from 'react'

const VideoTitle = ({original_title, overview}) => {
  return (
    <div className='pt-60 px-14 absolute w-full aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{original_title}</h1>
        <p className='text-lg w-5/12 mt-4'>{overview}</p>
        <div className='flex gap-5 mt-4'>
        <button className='bg-white text-black px-10 text-xl border-none font-semibold rounded-md py-2 hover:bg-opacity-90'> Play</button>
        <button className='bg-gray-600 text-white text-lg px-5 border-none rounded-md font-semibold py-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle