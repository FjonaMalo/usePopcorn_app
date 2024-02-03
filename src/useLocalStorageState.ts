import { useEffect, useState } from "react";
import { AddWatched } from "./types";

export const useLocalStorageState = <T>(
  initialState: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const storedValue = localStorage.getItem(key);
  const initialWatchedState: T = storedValue
    ? JSON.parse(storedValue)
    : initialState;
  const [value, setValue] = useState<T>(initialWatchedState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
