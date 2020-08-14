import React, { ReactElement } from "react";
import MovieCard from "components/common/movie-card";
import * as S from "./movies-list-styles";
import { MoviePoster } from "types/movies";

interface Props {
  movies: Array<MoviePoster>;
}

export default function MoviesList({ movies }: Props): ReactElement {
  return (
    <S.List>
      {movies.map((movie) => {
        const { imdbID, Title, Year, Type, Poster } = movie;

        return (
          <S.Item key={imdbID}>
            <MovieCard
              imdbID={imdbID}
              Title={Title}
              Year={Year}
              Type={Type}
              Poster={Poster}
            ></MovieCard>
          </S.Item>
        );
      })}
    </S.List>
  );
}
