import { useRef, useEffect } from "react";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const callback = (e: { code: string }) => {
      if (document.activeElement === inputEl.current) return;
      if (e.code === "Enter") {
        inputEl.current?.focus();
        setQuery("");
      }
    };
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

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
