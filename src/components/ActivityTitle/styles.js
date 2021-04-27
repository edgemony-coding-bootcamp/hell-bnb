import styled from "styled-components";

import device from "../../assets/breakpoints";

// Activity Title

export const ActivityTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* height: 100px;
  width: 100vw; */

  @media ${device.deviceL} {
    /* width: 100vw;
    height: 100px; */

    transition: all 0.2s ease-in-out;
  }
`;

export const ActivityTitleText = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  align-items: flex-start;
`;

// Share div

export const RankingWrap = styled.div`
  display: flex;
  align-items: center;

  @media ${device.deviceL} {
    /* width: 100vw;
    height: 100px; */
    transition: all 0.2s ease-in-out;
  }
`;

export const ShareButton = styled.button`
  display: none;
  @media ${device.deviceL} {
    display: flex;
    margin-left: 500px;
    background-color: white;
    border: none;
  }
`;

export const Span = styled.span`
  @media ${device.deviceL} {
    display: flex;
    margin-left: 5px;
    text-decoration: underline;
  }
`;
