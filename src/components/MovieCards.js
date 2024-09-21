import React from "react";
import { IMG_CDN } from "../utils/contant-url";
import VideoBackground from "./VideoBackground";
import { useDispatch } from "react-redux";
import { getid, setOpen } from "../utils/movieSLice";
const MovieCards = ({ posterPath, movieId }) => {

  const dispatch = useDispatch();
  if (!posterPath) {
    return null;
  }

 const  handleOpen = () => {
  dispatch(getid(movieId));
  dispatch(setOpen(true));
 }

  return (
    <div className="md:w-44 w-40 lg:w-44 cursor-pointer" onClick={handleOpen}>
      <img
        alt="Now Playing Movies"
        className="rounded-md  hover:scale-105 mx-3  mb-2 hover:outline outline-1 transition-all ease-in "
        src={IMG_CDN + posterPath}
      ></img>
    </div>
  );
};

export default MovieCards;
