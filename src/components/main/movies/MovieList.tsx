import Movie from "./movieLists/Movie";
import { MoviesMainProps } from "../../../types";

const MovieList = ({ movies, onSelectMovie }: MoviesMainProps) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
