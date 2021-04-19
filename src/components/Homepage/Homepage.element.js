import styled from "styled-components";
import device from "../../assets/breakpoints";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  padding-left:20px;
  @media ${device.deviceXL} {
    width: 50%;
    margin-left: 50px;
  }
`;
export const Title = styled.h1`
  color: rgb(72, 72, 72);
  font-size: 12px;
  margin-bottom: 5px;
`;
export const SubTitle = styled.h2`
  color: rgb(72, 72, 72);
  margin-top: 5px;
  font-size: 38px;
  @media ${device.deviceXL} {
    font-size: 46px;
  }
`;
