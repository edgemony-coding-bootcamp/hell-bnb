
import styled from "styled-components";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const HeaderCarousel = styled.div `
  display: flex;
  justify-content: space-between;
`
export const NavigatorCarousel = styled.div `
  display: flex;
  margin-right: 5vh;
`
export const CounterSlide = styled.p `
  font-size: 1rem;
  padding-right: 5px;
  margin: 0px;
`
export const NavBtn = styled.button `
  border: ${colors.borderColor} solid 1px;
  border-radius: 50%;
  background-color: white;
  color: black;
  width: 20px;
  height: 20px;
  font-size: 1.5rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  line-height: 0px;
  margin-left: 3px;
  :focus { outline: none; }
`

export const CarouselTitle = styled.h3 `
  color:black;
  padding-left: 2vh;
`
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
    overflow: hidden;
  }
`
