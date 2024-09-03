import React from "react";
import { IMG_CDN } from "../utils/contant-url";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  }

  return (
    <div className="w-44 h-fit">
      <img
        alt="Now Playing Movies"
        className="rounded-md  hover:scale-105 mx-3  mb-4 hover:outline outline-1 transition-all ease-in "
        src={IMG_CDN + posterPath}
      ></img>
    </div>
  );
};

export default MovieCards;
