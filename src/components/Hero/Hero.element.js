import styled from "styled-components";

export const CoverHero = styled.div`
  width: 100%;
  height: 391px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 10px;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const HeroWrapper = styled.div`
  width: 100%;
`;
