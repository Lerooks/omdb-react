import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: start;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const Item = styled.li``;
