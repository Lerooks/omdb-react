import React, { ReactElement, FormEvent, ChangeEvent } from "react";
import SearchIcon from "assets/images/icons/search.svg";
import * as S from "./header-styles";

interface Props {
  term: string;
  isAbleToSubmit: boolean;
  handleChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

export default function Header({
  term,
  isAbleToSubmit,
  handleChange,
  handleSubmit,
}: Props): ReactElement {
  return (
    <S.Header>
      <S.Title> OMDB API </S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder="Search any movies or tv shows"
          value={term}
          onChange={handleChange}
        />
        <S.Submit type="submit" disabled={!isAbleToSubmit}>
          <S.Icon src={SearchIcon}></S.Icon>
        </S.Submit>
      </S.Form>
    </S.Header>
  );
}
