import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors.yellow};
  border-color: ${(props) => props.theme.colors.yellow};
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 1px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  justify-content: center;
  letter-spacing: normal;
  outline: none;
  padding: 0.75rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.4s ease;

  &:hover {
    background-color: ${(props) => darken(0.05, props.theme.colors.yellow)};
    border-color: ${(props) => darken(0.05, props.theme.colors.yellow)};
  }
`;
