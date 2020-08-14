import styled from "styled-components";
import { transparentize } from "polished";

export const Link = styled.a`
  position: relative;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Card = styled.article`
  position: relative;
`;

export const Year = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 2rem;
  color: #fff;
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 700;
  justify-content: center;
  left: 50%;
  padding: 0.25rem 0.75rem;
  position: absolute;
  top: -0.5rem;
  transform: translateX(-50%);
`;

export const PosterWrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightBlack};
  display: flex;
  height: 300px;
  justify-content: center;
  overflow: hidden;
`;

export const Poster = styled.img`
  max-width: 100%;
`;

export const Content = styled.div`
  height: 100px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 1rem;
`;

export const Type = styled.p`
  color: ${(props) => transparentize(0.5, "#fff")};
  font-size: 0.75rem;
  text-transform: uppercase;
`;
