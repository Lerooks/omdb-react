import React, { ReactElement } from "react";
import * as S from "./footer-styles";

export default function Footer(): ReactElement {
  return (
    <S.Wrapper>
      <S.Text>
        Developed by
        <S.Link href="https://github.com/Lerooks" target="_blank">
          @Lerooks
        </S.Link>
      </S.Text>
    </S.Wrapper>
  );
}
