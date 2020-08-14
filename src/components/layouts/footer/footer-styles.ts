import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Text = styled.p`
  color: ${(props) => transparentize(0.5, props.theme.colors.yellow)};
  margin: 0;
  opacity: 0.75;
`;

export const Link = styled.a`
  color: ${(props) => transparentize(0.5, props.theme.colors.yellow)};
  display: inline-block;
  margin-left: 0.25rem;
  text-decoration: none;
  transition: color 0.4s ease;

  &:hover {
    color: ${(props) => transparentize(0.25, props.theme.colors.yellow)};
    text-decoration: none;
  }
`;
