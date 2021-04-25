import styled, { css } from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const PhotoPreviewWrapper = styled.div`
  width: 100%;

  /* Height must be changed to 60% of the father element */

  /* end of comment, 72px is the button size */

  padding: 0 24px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.deviceL} {
    position: relative;
    height: 40vh;
  }

  @media ${device.deviceXL} {
    position: relative;
    height: 50vh;
    max-height: 300px;
    width: 100%;
  }
`;
// Image Containers
export const ImageWrapper = styled.div`
  height: 77vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100%; */

  @media ${device.deviceL} {
    width: 50%;
  }

  @media ${device.deviceXL} {
    width: 100%;
  }
`;
export const ImageRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media ${device.deviceXL} {
    max-width: 2600px;
  }
`;

export const ImageColumnContainer = styled.div`
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 8px;

  @media ${device.deviceL} {
    min-width: 150px;
    max-height: 300px;
  }
  @media ${device.deviceXL} {
    max-height: 200px;
  }
`;

// Images
export const ImageRow = styled.img`
  width: 66%;
  height: 100%;
  min-height: 100%;
  cursor: pointer;
  object-fit: cover;
  border-radius: ${(props) =>
    props.left ? "15px 0px 0px 15px" : "0px 0px 0px 0px"};
  :hover {
    opacity: 0.9;
  }
  @media ${device.deviceL} {
    height: 70%;
    object-fit: contain;
    display: ${(props) => (props.hidden ? "block" : "block")};
    ${(props) =>
      props.zero &&
      css`
        border-radius: 0px;
      `}
    ${(props) =>
      props.right &&
      css`
        border-radius: 0px 15px 15px 0px;
      `}
  }
  @media ${device.deviceXL} {
    height: 100%;
    object-fit: cover;
  }
`;
export const ImageColumn = styled.img`
  width: 100%;
  height: calc(50% - 4px);

  cursor: pointer;
  object-fit: cover;

  border-radius: ${(props) =>
    props.topRight ? "0px 15px 0px 0px" : "0px 0px 15px 0px"};

  display: ${(props) =>
    (props.hidden ? "none" : props.display) ? "block" : "block"};

  :hover {
    opacity: 0.9;
  }

  @media ${device.deviceL} {
    height: 70%;
    display: ${(props) => (props.hidden ? "block" : "block")};
    border-radius: 0px;
  }
  @media ${device.deviceXL} {
    height: 67%;
  }
`;

export const IconContainer = styled.span`
  display: none;

  @media ${device.deviceM} {
    display: inline-block;
  }
`;

export const OpenModalBtn = styled.button`
  margin-top: 24px;
  font-size: 1rem;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 13px 0;
  cursor: pointer;
  font-weight: 600;
  border: 1.3px solid ${colors.darkText};
  :hover {
    transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  }
  :focus {
    outline: none;
  }
  @media ${device.deviceL} {
    width: 20%;
    position: absolute;
    top: 70%;
    right: 3%;
  }
  @media ${device.deviceXL} {
    width: 20%;
    position: absolute;
    top: 75%;
    right: 1%;
  }
`;
