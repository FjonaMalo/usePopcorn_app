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
import Loader from "./components/handleFetching/Loader";
import ErrorMessage from "./components/handleFetching/ErrorMessage";

const KEY = "ac047b87";

function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState<WatchedMovieType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const search = "shrek";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something wen wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        console.log(data);
        setMovies(data.Search);
      } catch (err: any) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <div>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
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
