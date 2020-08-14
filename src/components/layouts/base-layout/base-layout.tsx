import React, { ReactElement, ReactNode } from "react";
import Header from "components/layouts/header";
import Aside from "components/layouts/aside";
import Footer from "components/layouts/footer";
import * as S from "./base-layout-styles";

interface Props {
  children: ReactNode;
}

export default function BaseLayout({ children }: Props): ReactElement {
  return (
    <S.Layout>
      <S.HeaderWrapper>
        <Header></Header>
      </S.HeaderWrapper>
      <S.AsideWrapper>
        <Aside></Aside>
      </S.AsideWrapper>
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <S.FooterWrapper>
        <Footer></Footer>
      </S.FooterWrapper>
    </S.Layout>
  );
}
