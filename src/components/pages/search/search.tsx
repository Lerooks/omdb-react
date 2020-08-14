import React, { ReactElement, MouseEvent } from "react";
import { MoviePoster } from "types/movies";
import MovieList from "components/common/movies-list";
import Button from "components/common/button";
import * as S from "./search-styles";

interface Props {
  page: number;
  totalResults: number;
  loading: boolean;
  movies: Array<MoviePoster>;
  loadMoreMovies: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Search({
  movies,
  page,
  loading,
  totalResults,
  loadMoreMovies,
}: Props): ReactElement {
  return (
    <>
      {loading ? (
        <S.Loading> loading... </S.Loading>
      ) : (
        <S.Wrapper>
          <S.Header>
            <S.Title> Search results: </S.Title>
          </S.Header>
          <S.ListWrapper>
            <MovieList movies={movies}></MovieList>
          </S.ListWrapper>
          <S.Actions>
            {page * 10 < totalResults ? (
              <Button onClick={loadMoreMovies}> Load more... </Button>
            ) : null}
          </S.Actions>
        </S.Wrapper>
      )}
    </>
  );
}
