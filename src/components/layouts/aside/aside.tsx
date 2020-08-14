import React, { ReactElement } from "react";
import Logo from "assets/images/brand/omdb.png";
import { Link } from "react-router-dom";
import * as S from "./aside-styles";

export default function Aside(): ReactElement {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={Logo} alt="OMDB"></S.Logo>
      </S.Header>
      <S.Navigation>
        <S.List>
          <S.Item>
            <S.Link as={Link} to="/">
              Home
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link as={Link} to="/search/monsters">
              Search Example
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link as={Link} to="/details/tt4975722">
              Details Example
            </S.Link>
          </S.Item>
        </S.List>
      </S.Navigation>
    </S.Wrapper>
  );
}
