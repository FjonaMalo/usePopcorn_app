import { ReactNode } from "react";

export interface MovieTypes {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedProps {
  watched: AddWatched[];
  onDeleteWatched?: (id: string) => void;
}

export interface MovieTypeProps {
  movie: MovieTypes;
  onSelectMovie: (id: string) => void;
}

export interface NumResultsProps {
  movies: MovieTypes[];
}
export interface MoviesMainProps {
  movies: MovieTypes[];
  onSelectMovie: (id: string) => void;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface MovieDetailsObject {
  imdbID: string;
  Title?: string;
  Poster?: string;
  Runtime?: string;
  imdbRating?: string | number;
  Plot?: string;
  Released?: string;
  Actors?: string;
  Director?: string;
  Genre?: string;
}

export interface AddWatched {
  imdbID: string;
  poster: string | undefined;
  imdbRating: number;
  runtime: number;
  title: string | undefined;
  userRating: number;
  countRatingDecisions?: number;
}
