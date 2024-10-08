import { useSelector } from 'react-redux';
import useTrailerVideos from './hooks/useTrailerVideos';

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

 useTrailerVideos(movieId);


  return (
    <div className='md:w-full  lg:w-full md:h-full h-[200px] lg:h-full overflow-hidden'>
      <iframe className='w-full  overflow-hidden aspect-video lg:aspect-video  md:aspect-video object-cover'  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&autoplay=1&loop=1&playlist=${trailerVideo?.key}
       `} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground;