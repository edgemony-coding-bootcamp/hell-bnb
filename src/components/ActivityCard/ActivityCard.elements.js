import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: black solid 1px; */
  border-radius: 10px;
  background-color: white;
  min-width: 210px;
  min-height: 360px;

  @media ${device.deviceM} {
    max-width: 250px;
    height: 410px;
  }
  @media ${device.deviceL} {
    max-width: 280px;
    height: 410px;
  }
  @media ${device.deviceXL} {
    max-width: 335px;
    height: 40px;
  }
`;

export const Img = styled.img`
  padding: 1vh;
  width: 100%;
  min-height: 144px;
  height: fit-content;
  border-radius: 10%;
  margin: 0px;

  @media ${device.deviceM} {
    width: 100%;
    min-height: 144px;
  }
  @media ${device.deviceL} {
  }
  @media ${device.deviceXL} {
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0vh 1.5vh 0.5vh 1.5vh;
  font-family: Helvetica;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 0.9em;
  margin: 3px 0px 0px 0px;
  height: 40%;
  line-height: 1.2em;
  /* white-space: nowrap; */
  overflow: hidden;
  /* text-overflow: ellipsis; */

  @media ${device.deviceM} {
    height: 32%;
  }
  @media ${device.deviceXL} {
    height: 32%;
  }
`;

export const Detail = styled.p`
  font-size: 1.1em;
  margin: 3px 0px 7px 0px;
  line-height: 0.9em;
`;
export const Bold = styled.p`
  color: ${colors.darkText};
  margin: 0px;
  font-weight: bold;
  display: inline;
`;
