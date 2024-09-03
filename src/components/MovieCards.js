import React from "react";
import { IMG_CDN } from "../utils/contant-url";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  }

  return (
    <div className="md:w-44 w-40 lg:w-44">
      <img
        alt="Now Playing Movies"
        className="rounded-md  hover:scale-105 mx-3  mb-2 hover:outline outline-1 transition-all ease-in "
        src={IMG_CDN + posterPath}
      ></img>
    </div>
  );
};

export default MovieCards;
