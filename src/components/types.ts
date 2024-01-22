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
  movie: WatchedMovieType & MovieTypes;
}