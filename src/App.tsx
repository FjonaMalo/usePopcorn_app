import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Search from "./components/navbar/Search";
import NumResults from "./components/navbar/NumResults";
import ListBox from "./components/main/ListBox";
import MovieList from "./components/main/movies/MovieList";
import WatchedSummary from "./components/main/movies/WatchedSummary";
import WatchedMoviesList from "./components/main/movies/WatchedMoviesList";
import { WatchedMovieType } from "./types";
import Loader from "./Loader";

const KEY = "ac047b87";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState<WatchedMovieType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=shrek`);
      const data = await res.json();
      setMovies(data.Search);
      console.log(data.Search);
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          {isLoading ? <Loader /> : <MovieList movies={movies} />}
        </ListBox>
        <ListBox>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </ListBox>
      </Main>
    </div>
  );
}

export default App;
