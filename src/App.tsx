import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { tempMovieData } from "./components/DummyData";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <div>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </div>
  );
}

export default App;
