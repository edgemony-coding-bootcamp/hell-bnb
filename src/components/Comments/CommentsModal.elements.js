import styled, { css } from "styled-components";
import device from "../../assets/breakpoints";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  pointer-events: none;
  padding: 0px 8px 8px;
  z-index: 1000;

  ${(props) =>
    props.modalIsOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const ModalHead = styled.div`
  align-items: center;
  background-color: rgb(255, 255, 255);
  display: flex;
  left: 0px;
  height: 65px;
  padding: 20px 24px;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1;

  @media ${device.deviceM} {
    position: absolute;
  }
`;
export const ModalHeadBtnDiv = styled.div`
  height: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  @media ${device.deviceM} {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const ModalHeadBtn = styled.button`
  display: block;
  position: absolute;
  margin-left: 24px;
  z-index: 1;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  font-size: 16px;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(222, 222, 222, 0.85);
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;

  ${(props) =>
    props.overlay &&
    css`
      opacity: 0.6;
      background-color: rgba(0, 0, 0, 0.87);
    `}
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 2px 36px rgba(0, 0, 0, 0.25);
  opacity: 1;
  overflow-y: scroll;
  align-items: center;
  border: 1px solid black;
  border-radius: 13px;

  @media ${device.deviceM} {
    width: 740px;
    height: 92vh;
    top: 50%;
    left: 50%;
    overflow: auto;
    transform: translate(-45%, -49%);
    align-items: flex-start;
  }
  @media ${device.deviceXL} {
    width: 780px;
    height: 88vh;
    top: 48%;
  }
`;
export const ModalWrapper = styled.div`
  padding: 0px 24px 24px 24px;
  margin-top: 30px;
`;
export const ModalRank = styled.div`
  font-size: 22px;
  height: 26px;
  width: 100%;
  margin-bottom: 32px;
  margin-top: 40px;
  padding-left: 16px;
`;
