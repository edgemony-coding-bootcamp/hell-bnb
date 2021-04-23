import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const PhotoPreviewWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;

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
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  max-height: 50vh;
  width: 100%;
  height: 100%;

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
  max-width: 452px;
  max-height: 602px;

  @media ${device.deviceXL} {
    max-width: 2600px;
  }
`;

export const ImageColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 452px;
  max-height: 602px;

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
  padding: 4px;
  width: 100%;
  height: 85%;
  object-fit: cover;
  cursor: pointer;

  border-radius: ${(props) =>
    props.left ? "15px 0px 0px 15px" : "0px 0px 0px 0px"};

  display: ${(props) =>
    (props.hidden ? "none" : props.display) ? "block" : "block"};

  :hover {
    opacity: 0.9;
  }

  @media ${device.deviceL} {
    height: 70%;
    object-fit: contain;

    display: ${(props) => (props.hidden ? "block" : "block")};

    border-radius: ${(props) =>
      (props.zero ? "0px 0px 0px 0px" : props.left)
        ? "40px 0px 0px 40px"
        : "0px 40px 40px 0px"};
  }

  @media ${device.deviceXL} {
    height: 100%;
    object-fit: fill;
  }
`;

export const ImageColumn = styled.img`
  padding: 4px;
  width: 100%;
  height: 42.5%;
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

    border-radius: ${(props) =>
      (props.zero ? "0px 0px 0px 0px" : props.left)
        ? "0px 40px 40px 0px"
        : "40px 0px 0px 40px"};
  }
  @media ${device.deviceXL} {
    height: 67%;
  }
`;

export const ShowBtn = styled.button`
  font-size: 1rem;
  width: 90%;
  border-radius: 8px;
  padding: 10px 0;
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
