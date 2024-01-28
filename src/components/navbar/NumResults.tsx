import { NumResultsProps } from "../../types";

const NumResults = ({ movies }: NumResultsProps) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
