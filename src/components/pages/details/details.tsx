import React, { ReactElement } from "react";
import { MovieDetails } from "types/movies";
import * as S from "./details-styles";

interface Props extends MovieDetails {
  loading: boolean;
}

export default function Details({
  Title,
  Year,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Language,
  Country,
  Awards,
  Poster,
  imdbRating,
  Type,
  loading,
}: Props): ReactElement {
  return (
    <>
      {loading ? (
        <S.Loading> loading... </S.Loading>
      ) : (
        <S.Grid>
          <S.ImageWrapper>
            {Poster === "N/A" ? null : (
              <S.Image src={Poster} alt={Title} title={Title} />
            )}
          </S.ImageWrapper>
          <S.Content>
            <S.Header>
              <S.Title> {Title} </S.Title>
              <S.Breadcrumbs>
                <S.Item> {Language} </S.Item>
                <S.Item> {Country} </S.Item>
                <S.Item> {Type} </S.Item>
                <S.Item> {Year} </S.Item>
                <S.Item> {Runtime} </S.Item>
              </S.Breadcrumbs>
              <S.Genre>{Genre}</S.Genre>
              <S.About>
                <S.Release> {Released} </S.Release>
                <S.Rating> {imdbRating} </S.Rating>
              </S.About>
            </S.Header>
            <S.Middle>
              <S.Subhead> Synopsis </S.Subhead>
              <S.Plot>{Plot}</S.Plot>
            </S.Middle>
            <S.Info>
              <S.InfoItem>
                <S.InfoLabel> Writer </S.InfoLabel>
                <S.InfoValue>{Writer}</S.InfoValue>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoLabel> Actors </S.InfoLabel>
                <S.InfoValue>{Actors}</S.InfoValue>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoLabel> Awards </S.InfoLabel>
                <S.InfoValue>{Awards}</S.InfoValue>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoLabel> Director </S.InfoLabel>
                <S.InfoValue>{Director}</S.InfoValue>
              </S.InfoItem>
            </S.Info>
          </S.Content>
        </S.Grid>
      )}
    </>
  );
}
