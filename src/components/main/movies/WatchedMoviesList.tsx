import React from "react";
import WatchedMovie from "./movieLists/WatchedMovie";
import { WatchedProps } from "../../types";

const WatchedMoviesList = ({ watched }: WatchedProps) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
