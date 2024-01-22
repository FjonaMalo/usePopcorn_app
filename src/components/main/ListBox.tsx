import { useState } from "react";
import MovieList from "./movies/MovieList";
import { MoviesMainProps } from "../../types";

const ListBox = ({ movies }: MoviesMainProps) => {
  console.log(movies);

  const [isOpen1, setIsOpen1] = useState<boolean>(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "-" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default ListBox;
