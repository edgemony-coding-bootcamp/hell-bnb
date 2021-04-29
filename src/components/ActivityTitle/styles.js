import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

// Activity Title

export const ActivityTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ActivityTitleText = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  align-items: flex-start;
`;

// Share div

export const RankingWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const CountryTitle = styled.a`
  text-decoration: none;
  text-decoration: underline;
  font-weight: bold;
  padding-top: 3px;
  cursor: pointer;
  color: ${colors.darkText};

  :hover {
    color: ${colors.darkText};
    text-decoration: underline;
  }
`;

export const ShareButton = styled.button`
  display: none;

  @media ${device.deviceL} {
    position: absolute;
    left: 1028px;
    padding-top: 2px;
    display: flex;

    font-weight: bold;
    background-color: white;
    border: none;
  }
`;

export const Span = styled.span`
  display: flex;
  text-decoration: underline;
`;

export const Dot = styled.p`
  margin: 0;
  padding: 0 8px;
  padding-top: 2px;
`;
