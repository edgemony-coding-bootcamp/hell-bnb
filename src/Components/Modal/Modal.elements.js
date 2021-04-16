import styled from 'styled-components'

import { device } from '../../assets/breakpoints'

export const Modal_Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  height: 800px;
  width: 500px;
  z-index: 10;
  border-radius: 10px;
  position: relative;

  @media ${device.deviceL} {
    height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out;
  }
`

// export const Modal_Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100vh;
//   z-index: 3;
//   position: absolute;
//   background-color: black;

//   @media ${device.deviceL} {
//     height: 100px;
//     margin: 55px 25px 25px 125px;
//     transition: all 0.2s ease-in-out;
//   }
// `

export const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: flex;
  align-items: center;
  background-color: black;

  @media ${device.deviceL} {
    height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out;
  }
`

export const Modal_Image = styled.image`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  z-index: 3;
  position: absolute;
  background-color: black;

  @media ${device.deviceL} {
    height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out;
  }
`

export const CloseModalBtn = styled.button`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  @media ${device.deviceL} {
    /* height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out; */
  }
`

// export const Modal_Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
//   flex-basis: 100%;
//   flex: 1;
//   margin-top: 200px;
//   height: 400px;
//   /*
//   border: 4px red solid; */
//   box-sizing: border-box;
//   object-fit: cover;

//   @media ${device.deviceL} {
//     height: 100px;
//     margin: 55px 25px 25px 125px;
//     transition: all 0.2s ease-in-out;
//   }
// `
