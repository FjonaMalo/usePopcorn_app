import { MoviesMainProps } from "../../types";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const Main = ({ movies }: MoviesMainProps) => {
  return (
    <div>
      <main className="main">
        <ListBox movies={movies} />
        <WatchedBox />
      </main>
    </div>
  );
};

export default Main;
