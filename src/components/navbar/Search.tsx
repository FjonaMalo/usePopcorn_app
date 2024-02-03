import { useRef } from "react";
import { useKey } from "../../useKey";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    setQuery("");
  });

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </div>
  );
};

export default Search;
