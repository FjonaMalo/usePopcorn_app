import { WatchedProps } from "../../types";

const WatchedSummary = ({ watched }: WatchedProps) => {
  const average = (arr: number[]) =>
    arr.reduce((acc, cur) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐</span>
            <span>{avgImdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>⌛</span>
            <span>{avgRuntime}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchedSummary;
