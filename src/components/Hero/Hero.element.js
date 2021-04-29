import styled from "styled-components";

export const CoverHero = styled.div`
  width: 100%;
  min-height: 270px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
