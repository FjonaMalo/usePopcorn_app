interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
}

const MovieDetails = ({ selectedId, onCloseMovie }: MovieDetailsProps) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
