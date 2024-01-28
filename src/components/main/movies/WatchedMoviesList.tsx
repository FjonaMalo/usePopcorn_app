import WatchedMovie from "./movieLists/WatchedMovie";
import { WatchedProps } from "../../../types";

const WatchedMoviesList = ({
  watched,
  onDeleteWatched,
}: WatchedProps & { onDeleteWatched: (id: string) => void }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
