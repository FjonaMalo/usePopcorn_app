import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { tempMovieData } from "./components/DummyData";
import Search from "./components/navbar/Search";
import NumResults from "./components/navbar/NumResults";
import ListBox from "./components/main/ListBox";
import WatchedBox from "./components/main/WatchedBox";
import MovieList from "./components/main/movies/MovieList";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

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
        <WatchedBox />
      </Main>
    </div>
  );
}

export default App;
