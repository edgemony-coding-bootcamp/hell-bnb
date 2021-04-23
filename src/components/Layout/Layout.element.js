import styled from "styled-components";
import device from "../../assets/breakpoints";
import deviceMargin from "../../assets/margin";

const MainWrap = styled.div`
  width: 100vw;
  display: flex;
  margin: 0;
  margin-top: 130px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media ${device.deviceXXL} {
    width: 100vw;
  }
`;

const ContentWrap = styled.div`
  width: calc(100% - 48px);
  display: flex;
  height: 100%;
  margin-top: 10px;
  background-color: white;
  border: 1px solid red;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  @media ${device.deviceM} {
    width: calc(100% - 80px);
  }
  @media ${device.deviceL} {
    width: calc(100% - 160px);
  }
  @media ${device.deviceXL} {
    width: ${deviceMargin.deviceXL};
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
};
