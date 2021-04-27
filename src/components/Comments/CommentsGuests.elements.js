import styled, { css } from "styled-components";
import device from "../../assets/breakpoints";

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 358px;
  padding: 32px 0px;
  margin-left: 24px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;

  @media ${device.deviceM} {
    padding: 0;
    width: 100%;
    min-height: 648px;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0px -8px;
  }

  @media ${device.deviceL} {
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 746px;
    max-height: 910px;
    padding: 48px 0px 32px 0px;
  }
`;

export const GuestReview = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  min-height: 202px;
  box-sizing: border-box;
  padding: 16px;
  margin: 0px 10px 0px 0px;
  min-width: 75%;
  ${(props) =>
    props.noBorder &&
    css`
      border: none;
      margin: 0px 0px 32px;
      width: 90%;
      height: fit-content;
    `}
  ${(props) =>
    props.modal &&
    css`
      margin: 0;
      min-width: 100%;
    `}  


  @media ${device.deviceM} {
    margin-bottom: 40px;
    min-height: 140px;
    max-height: 140px;
    border: none;
    ${(props) =>
      props.modal &&
      css`
        min-width: 700px;
        max-height: fit-content;
        margin-bottom: 32px;
      `}
  }
  @media ${device.deviceL} {
    padding-bottom: 8px;
    min-height: 168px;
    max-width: 394px;
    min-width: 476px;
    ${(props) =>
      props.modal &&
      css`
        min-width: 700px;
        min-height: 100px;
        margin-bottom: 32px;
        padding-bottom: 0px;
      `}
  }
`;
export const GuestData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px, 10px;
`;
export const GuestImage = styled.img`
  display: block;
  width: 40px;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  @media ${device.deviceM} {
    width: 56px;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  height: 40px;
  align-items: center;
  @media ${device.deviceM} {
    height: 56px;
  }
`;
export const GuestName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 12px;
`;
export const GuestRevDate = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #717171;
  margin-left: 12px;
`;
export const GuestComment = styled.p`
  font-size: 16px;
  margin: 10px 0px;
  line-height: 24px;
  padding-bottom: 8px;
  ${(props) =>
    props.modalComment &&
    css`
      font-size: 15px;
      color: #717171;
      line-height: 1.8;
      word-break: break-word;
    `}
`;
export const ReviewBtnDiv = styled.div`
  display: flex;
  width: 100%;
  max-height: 48px;
  margin-top: 24px;

  @media ${device.deviceM} {
    max-width: 100%;
    margin-top: 8px;
  }
`;
export const ReviewBtn = styled.button`
  display: block;
  position: relative;
  width: 95%;
  height: 48px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  border-radius: 8px;
  border: 1px solid;
  outline: none;
  padding: 13px 0px;
  border-color: #222222;
  background: #ffffff;
  color: #222222;
  margin: 0px;
  font-weight: 400;
  @media ${device.deviceM} {
    width: 100%;
    padding: 13px 23px;
    max-width: 279px;
    font-weight: 600;
  }
`;
