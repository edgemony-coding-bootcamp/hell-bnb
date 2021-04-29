import styled from "styled-components";

export const CoverHero = styled.div`
  width: 100%;
  max-height: 480px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
`;
