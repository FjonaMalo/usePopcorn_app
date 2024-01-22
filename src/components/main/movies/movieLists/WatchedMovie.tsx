import React from "react";
import { WatchedMovieType } from "../../../../types";

const WatchedMovie = ({ movie }: { movie: WatchedMovieType }) => {
  console.log(movie);

  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{movie.runtime}</span>
        </p>
      </div>
    </li>
  );
};

export default WatchedMovie;
