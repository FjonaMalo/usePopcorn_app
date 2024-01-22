import Movie from "./movieLists/Movie";
import { MoviesMainProps } from "../../../types";

const MovieList = ({ movies }: MoviesMainProps) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
