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
import { AddWatched } from "./types";
import Loader from "./components/handleFetching/Loader";
import ErrorMessage from "./components/handleFetching/ErrorMessage";
import MovieDetails from "./components/main/movies/movieLists/MovieDetails";
import { useMovies } from "./useMovies";

function App() {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState("");
  const storedValue = localStorage.getItem("watched");
  const initialWatchedState: AddWatched[] = storedValue
    ? JSON.parse(storedValue)
    : [];
  const [watched, setWatched] = useState<AddWatched[]>(initialWatchedState);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  const handleSelectMovie = (id: string) => {
    setSelectedId((selectedId) => (id === selectedId ? "" : id));
  };

  function handleCloseMovie() {
    setSelectedId("");
  }

  const handleAddWatched = (movie: AddWatched) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id: string) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <div>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </ListBox>
      </Main>
    </div>
  );
}

export default App;
