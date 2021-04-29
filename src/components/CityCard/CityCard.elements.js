import styled from "styled-components";
// import device from "../../assets/breakpoints";

export const CityCardWrapper = styled.div`
  display: flex;
  margin-right: 1.1vh;
  flex-direction: column;
  /* border: black solid 1px; */
  border-radius: 10px;
  background-color: white;
  min-width: 140px;
  max-width: 140px;
  min-height: 160px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
`;

export const CityImg = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 5% 5% 0% 0%;
  border: black solid 1px;
  margin: 0px;
  /* background-image: url(${(props) => props.img}); */
  background-size: cover;
`;
export const CityName = styled.p`
  font-size: 15px;
  padding: 14px 0px 30px 15px;
`;
