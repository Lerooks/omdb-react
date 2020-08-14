import React, { ReactElement, ChangeEvent, FormEvent } from "react";
import SearchIcon from "assets/images/icons/search.svg";
import Logo from "assets/images/brand/omdb.png";
import * as S from "./home-styles";

interface Props {
  term: string;
  isAbleToSubmit: boolean;
  handleChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

export default function Home({
  term,
  isAbleToSubmit,
  handleChange,
  handleSubmit,
}: Props): ReactElement {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <S.Logo src={Logo} />
        </S.Header>
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
      </S.Content>
    </S.Wrapper>
  );
}
