import styled from "styled-components";

export const Loading = styled.h1`
  color: #fff;
  margin-top: 0;
  color: #fff;
`;

export const Grid = styled.div`
  align-items: start;
  display: grid;
  gap: 20px;
  grid-template-areas: "poster" "content";
  grid-template-columns: 1fr;

  @media screen and (min-width: 600px) {
    grid-template-areas: "poster content";
    grid-template-columns: auto 1fr;
  }
`;

export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Content = styled.div`
  max-width: 500px;
`;

export const Header = styled.div``;

export const Title = styled.h1`
  color: #fff;
  margin-top: 0;
`;

export const Breadcrumbs = styled.div`
  margin-bottom: 1rem;
`;

export const Item = styled.a`
  color: #fff;
  display: inline-flex;
  margin-right: 1rem;
  opacity: 0.5;
  position: relative;

  &:not(:last-of-type) {
    &::after {
      content: "/";
      align-items: center;
      display: flex;
      height: 1rem;
      justify-content: center;
      left: 100%;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 1rem;
    }
  }
`;

export const About = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const Release = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 2rem;
  color: #fff;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  padding: 0.25rem 0.75rem;
`;

export const Rating = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 2rem;
  color: #fff;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  margin-left: 0.5rem;
  padding: 0.25rem 0.75rem;
`;

export const Genre = styled.div`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.3;
`;

export const Middle = styled.div``;

export const Subhead = styled.h2`
  color: #fff;
  opacity: 0.9;
`;

export const Plot = styled.p`
  color: #fff;
  opacity: 0.8;
`;

export const Info = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const InfoItem = styled.li``;

export const InfoLabel = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
  text-transform: uppercase;
`;

export const InfoValue = styled.p`
  color: #fff;
  font-size: 1rem;
  opacity: 0.8;
`;
