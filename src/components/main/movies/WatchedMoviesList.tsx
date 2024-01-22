import React from "react";
import WatchedMovie from "./movieLists/WatchedMovie";

const WatchedMoviesList = ({ watched }: any) => {
  return (
    <ul className="list">
      {watched.map((movie: any) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
