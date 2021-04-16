
import styled from "styled-components";
import device from "../../assets/breakpoints";
// import colors from "../../assets/colors";


export const WrapperCarousel = styled.div `
  
  display: flex;
  flex-direction: row;
  height: 45vh;
  width: 100%;
  /* border : black solid 1px; */
  overflow: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  
  @media ${device.deviceM} {
    height: 100vh;
  }
`
