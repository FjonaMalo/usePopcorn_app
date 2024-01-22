import { useState } from "react";
import { tempMovieData } from "../../DummyData";
import Movie from "./movieLists/Movie";

const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
