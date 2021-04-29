import styled from "styled-components";

const CoverHero = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 480px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

export default CoverHero;
