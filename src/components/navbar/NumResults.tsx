import { MoviesMainProps } from "../../types";

const NumResults = ({ movies }: MoviesMainProps) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
