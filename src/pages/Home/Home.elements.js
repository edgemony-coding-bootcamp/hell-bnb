import styled from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  margin-top: 80px;
  padding-left: 20px;
  @media ${device.deviceXL} {
    width: 50%;
    margin-left: 50px;
  }
`;
export const Title = styled.h1`
  color: ${colors.darkText};
  font-size: 12px;
  margin: 20px 0;
`;
export const SubTitle = styled.h2`
  color: ${colors.darkText};
  margin-top: 5px;
  font-size: 38px;
  @media ${device.deviceXL} {
    font-size: 46px;
  }
`;
