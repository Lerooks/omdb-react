import { MoviePoster, MovieDetails } from "types/movies";

export type SearchParams = {
  s?: String;
  page?: Number;
};

export type SearchResponse = {
  Response: "True" | "False";
  Search?: Array<MoviePoster>;
  totalResults: number;
} & {
  Response: "True" | "False";
  Error?: string | undefined;
};

export type FindByIdParams = {
  i: String;
};

export type FindByIdResponse = {
  Response: "True" | "False";
  Error?: string | undefined;
} & MovieDetails;
