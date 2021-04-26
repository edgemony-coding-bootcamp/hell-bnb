import styled, { css } from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 130px 24px 0px 24px;
  background-color: ${(props) => (props.color ? `${colors.footer}` : "white")};
  justify-content: center;
  box-sizing: border-box;
  ${(props) =>
    props.noPadding &&
    css`
      max-height: 80;
      justify-content: center;
      padding-top: 0;
    `}
  @media ${device.deviceM} {
    padding: 130px 40px 0px 40px;
    ${(props) =>
      props.noPadding &&
      css`
        max-height: 80;
        justify-content: center;
        padding-top: 0;
      `}
  }
  @media ${device.deviceL} {
    padding: 130px 80px 0px 80px;
    ${(props) =>
      props.noPadding &&
      css`
        max-height: 80;
        justify-content: center;
        padding-top: 0;
      `}
  }
  @media ${device.deviceXL} {
    padding: 130px auto 0px auto;
    ${(props) =>
      props.noPadding &&
      css`
        max-height: 80;
        justify-content: center;
        padding: 0;
      `}
  }
`;

const ContentWrap = styled.div`
  display: flex;
  min-width: 100%;
  margin-top: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  @media ${device.deviceXL} {
    min-width: 1128px;
    ${(props) =>
      props.header &&
      css`
        max-height: 80;
        justify-content: start;
        padding-top: 0;
      `}
  }
`;

const WrapPreviewPhoto = styled.div`
  height: 420px;
  width: 100%;
  margin: 20px 0;
  background-color: lightcoral;
`;

const WrapMainDetails = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 0px;
  @media ${device.deviceL} {
    margin: 40px 0px;
    padding: 40px 40px;
    position: relative;
    align-items: start;
  }
`;

const WrapGenericInfo = styled.div`
  background-color: white;
  width: 80%;
  min-height: 600px;
  @media ${device.deviceL} {
    width: 55%;
    margin: 20px 0px;
  }
`;

const WrapModalInfo = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: red;
  height: 10%;
  @media ${device.deviceM} {
    position: fixed;
    bottom: 10%;
    width: 350px;
    right: 20%;
    height: 30%;
    border-radius: 12px;
  }
`;

const WrapHost = styled.div`
  width: 100%;
  background-color: lightyellow;
  margin: 10px 0;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WrapExperiences = styled.div`
  width: 100%;
  background-color: lightgreen;
  margin: 10px 0;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WrapGeneric = styled.div`
  width: 100%;
  margin: 10px 0;
  min-height: 400px;
  display: flex;
  align-items: flex-start;
  background-color: ${(props) =>
    (props.info && `lightpink`) ||
    (props.comments && `lightblue`) ||
    (props.available && `lightcyan`) ||
    (props.carousel && `lightGoldenRodYellow`)};
`;

const WrapHeader = styled.div`
  display: flex;
  justify-content: start;
  width: 20%;
  max-height: 56px;
  align-items: center;
  @media ${device.deviceM} {
    max-height: 72px;
  }
  @media ${device.deviceL} {
    max-height: 84px;
  }
`;

export {
  MainWrap,
  ContentWrap,
  WrapPreviewPhoto,
  WrapGenericInfo,
  WrapMainDetails,
  WrapModalInfo,
  WrapHost,
  WrapExperiences,
  WrapGeneric,
  WrapHeader,
};
