import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: black solid 1px; */
  border-radius: 10px;
  background-color: white;

  width: 210px;
  height: 360px;

  @media ${device.deviceM} {
    width: 250px;
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
  padding: 1.5vh;
  width: 100%;
  border-radius: 10%;
  margin: 0px;
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
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media ${device.deviceM} {
    height: 28%;
  }
  @media ${device.deviceXL} {
    height: 30%;
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
