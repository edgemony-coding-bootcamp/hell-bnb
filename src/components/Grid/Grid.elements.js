import styled from 'styled-components'

import { device } from '../../assets/breakpoints'

// Photo Preview

export const Grid_Wrapper = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 100px;
  overflow-x: hidden;

  height: 600px;
  /* border: 4px red solid; */
  box-sizing: border-box;
  object-fit: cover;

  @media ${device.deviceL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-basis: 100%;
    flex: 1;
    margin-top: 200px;
    height: 400px;
    transition: all 0.2s ease-in-out;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 60vh;
  object-fit: cover;
  margin: 10px;
  overflow: hidden;
  /* border: 4px blue solid; */
  @media ${device.deviceL} {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    margin: 10px;
    overflow: hidden;
    border: 4px blue solid;
  }
`

export const ImageColumnWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100vw;
  height: 60vh;
  object-fit: cover;

  /* border: 4px black solid; */
  @media ${device.deviceL} {
    display: flex;
    flex-grow: 1;

    flex-direction: column;
    width: 100vw;
    height: 60vh;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }
`

export const Image = styled.img`
  width: ${(props) => (props.width ? '65%' : '100%')};
  height: ${(props) => (props.height ? '100%' : '60%')};
  border-radius: ${(props) =>
    props.top
      ? '0px 25px 0px 0px'
      : props.bottom
      ? '0px 0px 30px 0px'
      : '35px 0px 0px 40px'};
  margin: 5px 0px 0px 5px;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  display: ${(props) => (props.display ? 'block' : props.none ? 'none' : '')};
  @media ${device.deviceL} {
    display: ${(props) => (props.display ? 'none' : props.none ? 'block' : '')};
    width: ${(props) => (props.width ? '200px' : '200px')};
    height: ${(props) => (props.height ? '300px' : '300px')};
    border-radius: ${(props) =>
      props.top
        ? '0px 0px 0px 0px'
        : props.bottom
        ? '0px 0px 0px 0px'
        : '50px 0px 0px 50px'};
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    object-fit: cover;
  }
`
