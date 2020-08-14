export type MovieDetails = {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: string;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  totalSeasons?: string;
  Response?: string;
};

export type MoviePoster = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};
