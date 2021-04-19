import styled from 'styled-components';

import { device } from '../../assets/breakpoints';

export const PhotoPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 400px;

  @media ${device.deviceL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-in-out;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;

  @media ${device.deviceL} {
    display: flex;
    margin: 10px;
    overflow: hidden;
  }
`;
export const ImageRowWrapper = styled.div`
  display: flex;

  @media ${device.deviceL} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageColumnWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.deviceL} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageRow = styled.img`
  width: ${(props) => (props.width ? '70%' : '100%')};
  height: ${(props) => (props.height ? '100%' : '50%')};

  border-radius: ${(props) =>
    props.top
      ? '0px 25px 0px 0px'
      : props.bottom
      ? '0px 0px 30px 0px'
      : '35px 0px 0px 40px'};

  margin: 5px 0px 0px 5px;
  transition: all 0.2s ease-in-out;

  display: ${(props) => (props.display ? 'block' : props.none ? 'none' : '')};

  @media ${device.deviceL} {
    display: ${(props) => (props.display ? 'none' : props.none ? 'block' : '')};
    width: 300px;
    height: 100%;
    border-radius: ${(props) =>
      props.zero
        ? '0px 0px 0px 0px'
        : props.left
        ? '40px 0px 0px 40px'
        : '0px 40px 40px 0px'};
    transition: all 0.2s ease-in-out;
    object-fit: contain;
  }
`;

export const ImageColumn = styled.img`
  width: ${(props) => (props.width ? '70%' : '100%')};
  height: ${(props) => (props.height ? '100%' : '50%')};
  border-radius: ${(props) =>
    props.top
      ? '0px 25px 0px 0px'
      : props.bottom
      ? '0px 0px 30px 0px'
      : '35px 0px 0px 40px'};
  margin: 5px 0px 0px 5px;
  transition: all 0.2s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  display: ${(props) => (props.display ? 'block' : props.none ? 'none' : '')};

  @media ${device.deviceL} {
    display: ${(props) => (props.display ? 'none' : props.none ? 'block' : '')};
    width: 145px;
    height: 100%;
    border-radius: ${(props) =>
      props.zero
        ? '0px 0px 0px 0px'
        : props.left
        ? '0px 40px 40px 0px'
        : '40px 0px 0px 40px'};
    transition: all 0.2s ease-in-out;

    object-fit: contain;
  }
`;
