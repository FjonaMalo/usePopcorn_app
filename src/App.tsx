import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { tempMovieData, tempWatchedData } from "./components/DummyData";
import Search from "./components/navbar/Search";
import NumResults from "./components/navbar/NumResults";
import ListBox from "./components/main/ListBox";
import WatchedBox from "./components/main/WatchedBox";
import MovieList from "./components/main/movies/MovieList";
import WatchedSummary from "./components/main/movies/WatchedSummary";
import WatchedMoviesList from "./components/main/movies/WatchedMoviesList";
import { WatchedMovieType } from "./types";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState<WatchedMovieType[]>(tempWatchedData);

  return (
    <div>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        {/* <WatchedBox /> */}
        <ListBox>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </ListBox>
      </Main>
    </div>
  );
}

export default App;
