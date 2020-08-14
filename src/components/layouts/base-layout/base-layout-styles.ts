import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "header" "content" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;

  @media screen and (min-width: 900px) {
    grid-template-areas:
      "aside header"
      "aside content"
      "aside footer";
    grid-template-columns: 270px 1fr;
  }
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
`;

export const AsideWrapper = styled.div`
  grid-area: aside;
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.lighterBlack};
  grid-area: content;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  grid-area: footer;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
