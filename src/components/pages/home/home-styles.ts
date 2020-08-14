import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lighterBlack};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1.25rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-5rem);
`;

export const Header = styled.div``;

export const Logo = styled.img`
  margin-bottom: 2.5rem;
  max-width: 180px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;

  @media screen and (min-width: 600px) {
    min-width: 20rem;
    width: auto;
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.lighterBlack};
  border-color: ${(props) => transparentize(0.75, "#fff")};
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  color: #fff;
  padding: 0.5rem 2rem 0.5rem 1rem;
  width: 100%;
`;

export const Submit = styled.button`
  appearance: none;
  background-color: transparent;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  border: none;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 2.5rem;

  &:disabled {
    opacity: 0.25;
  }

  &:hover {
    &:not(:disabled) {
      cursor: pointer;
    }
  }
`;

export const Icon = styled.img`
  height: 1rem;
  width: 1rem;
`;
