import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  height: 100%;
  padding: 3rem 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 10rem;
  margin-bottom: 2.5rem;
`;

export const Navigation = styled.nav`
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
  display: block;
`;

export const Link = styled.a`
  background-color: ${(props) => props.theme.colors.lightBlack};
  color: #fff;
  color: ${(props) => transparentize(0.5, "#fff")};
  display: block;
  padding: 1rem 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  width: 100%;

  &:hover {
    color: ${(props) => transparentize(0, "#fff")};
    text-decoration: none;
  }
`;
