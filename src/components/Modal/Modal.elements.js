import styled from 'styled-components';

import { device } from '../../assets/breakpoints';

export const ActivityModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  transition: all 0.2s ease-in-out;
`;

export const PhotoCounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  height: 92px;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const PhotoCounterNum = styled.span`
  color: white;
  height: 20px;
  font-size: 12px;
  text-align: center;
  display: ${(props) => (props.mobile ? 'block' : 'none')};
  width: ${(props) => (props.center ? 'calc( 100% - 40px )' : '20px')};

  :hover {
    border-radius: 50%;
    background: ${(props) => (props.grey ? 'grey' : 'black')};
  }

  @media ${device.deviceL} {
    display: ${(props) => (props.desktop ? 'block' : 'none')};
    width: ${(props) => (props.center ? 'calc( 100% - 160px )' : '80px')};

    :hover {
      border-radius: 5px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  max-height: calc(100% - 92px);
  width: 100%;
  overflow-y: hidden;
`;

export const ModalImage = styled.img`
  min-height: 300px;
  width: 100%;
  max-width: 320px;
  padding-bottom: 92px;

  @media ${device.deviceL} {
    width: unset;
    height: 100%;
  }
`;

export const ArrowBtn = styled.button`
  @media ${device.deviceL} {
  }
`;

export const CloseBox = styled.div`
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: ${(props) => (props.display ? 'block' : props.none ? 'none' : '')};

  @media ${device.deviceL} {
    display: ${(props) => (props.display ? 'none' : props.none ? 'block' : '')};
    width: 7%;
    margin-right: 10px;
    background: black;
    color: white;
    border-style: none;
  }
`;
