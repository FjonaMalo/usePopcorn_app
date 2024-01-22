import { useState } from "react";
import { tempWatchedData } from "../DummyData";
import WatchedSummary from "./movies/WatchedSummary";
import WatchedMoviesList from "./movies/WatchedMoviesList";
import { WatchedMovieType } from "../types";

const WatchedBox = () => {
  const [isOpen2, setIsOpen2] = useState<boolean>(true);
  const [watched, setWatched] = useState<WatchedMovieType[]>(tempWatchedData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "-" : "+"}
      </button>
      {isOpen2 && <WatchedSummary watched={watched} />}
      <WatchedMoviesList watched={watched} />
    </div>
  );
};

export default WatchedBox;
