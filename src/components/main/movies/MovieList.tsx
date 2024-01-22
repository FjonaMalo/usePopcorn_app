import { useState } from "react";
import { tempMovieData } from "../../DummyData";
import Movie from "./movieLists/Movie";
import { MovieTypes } from "../../types";

const MovieList = () => {
  const [movies, setMovies] = useState<MovieTypes[]>(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
