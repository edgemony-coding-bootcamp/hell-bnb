import styled from 'styled-components'

import { device } from '../../assets/breakpoints'

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex;
  align-items: center;
  background-color: black;
  transition: all 0.2s ease-in-out;

  @media ${device.deviceL} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex;
    align-items: center;
    background-color: black;
    transition: all 0.2s ease-in-out;
  }
`

export const Modal_Wrapper = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  height: 85%;
  width: 90%;
  border-radius: 10px;
  position: relative;
  z-index: 10;
  transition: all 0.2s ease-in-out;

  background: url('https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    no-repeat center center/cover;
  top: 0;
  left: 0;
  border: 10px solid blue;

  object-fit: scale-down;
  @media ${device.deviceL} {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    height: 85%;
    width: 90%;
    border-radius: 10px;
    position: relative;
    z-index: 10;
    transition: all 0.2s ease-in-out;

    background: url('https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
      no-repeat center center/cover;
    top: 0;
    left: 0;
    border: 10px solid blue;
  }
`

export const Modal_Image = styled.image`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 90%;
  border: 5px solid red;
  z-index: 4;

  @media ${device.deviceL} {
    height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out;
  }
`

export const ArrowModalBtn = styled.button`
  position: absolute;
  cursor: pointer;
  flex-direction: flex-start;
  top: -50px;
  left: 80px;
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
