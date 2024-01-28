import { ReactNode } from "react";

export interface MovieTypes {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedMovieType extends MovieTypes {
  runtime: number;
  imdbRating: number;
  userRating: number;
}

export interface WatchedProps {
  watched: WatchedMovieType[];
}

export interface MovieProps {
  watched: MovieTypes[];
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
  Title?: string;
  Poster?: string;
  Runtime?: string;
  imdbRating?: string;
  Plot?: string;
  Released?: string;
  Actors?: string;
  Director?: string;
  Genre?: string;
}
