import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { MoviePoster } from "types/movies";
import * as S from "./movie-card-styles";

export default function MovieCard({
  imdbID,
  Title,
  Year,
  Type,
  Poster,
}: MoviePoster): ReactElement {
  return (
    <S.Link as={Link} to={`/details/${imdbID}`}>
      <S.Card>
        <S.Year> {Year} </S.Year>
        <S.PosterWrapper>
          {Poster === "N/A" ? null : (
            <S.Poster src={Poster} alt={Title}></S.Poster>
          )}
        </S.PosterWrapper>
        <S.Content>
          <S.Title> {Title} </S.Title>
          <S.Type> {Type} </S.Type>
        </S.Content>
      </S.Card>
    </S.Link>
  );
}
