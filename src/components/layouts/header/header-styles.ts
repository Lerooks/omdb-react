import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
`;

export const Title = styled.h2`
  color: #fff;
  display: none;
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  min-width: 20rem;
  position: relative;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: auto;
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.lighterBlack};
  border-radius: 2rem;
  border: none;
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
