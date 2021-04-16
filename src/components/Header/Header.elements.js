import styled from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  height: 56px;
  background: #ffffff;
  width: 100vw;
  border-bottom: 1px solid ${colors.borderColor};
  padding: 10px 20px;

  @media ${device.deviceM} {
    height: 72px;
    padding: 15px 30px;
  }

  @media ${device.deviceL} {
    height: 84px;
    padding: 20px 40px;
  }
`;

export const HeaderLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoHeading = styled.h1`
  color: ${colors.primaryColor};
  margin: 0 10px;
  font-size: 1.5rem;
  font-family: "Helvetica";
  display: none;

  @media ${device.deviceM} {
    display: block;
  }

  @media ${device.deviceL} {
    font-size: 2rem;
  }
`;
